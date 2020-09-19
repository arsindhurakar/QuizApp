import React, { useState } from "react";

import { stylesheet } from "typestyle";

import Button from "../../components/button/buttonDashboard";
import { datas } from "../../utils/quizDatas";
import { shuffle } from "../../utils/shuffler";
import Options from "../quiz/options";
import FinalScore from "../quiz/finalScore";

const classNames = stylesheet({
  page: {
    padding: "2rem",
    position: "relative",
    top: "25%",

    $nest: {
      "@media screen and (max-width: 1100px)": {
        top: "0%",
      },
    },
  },

  data: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#e7ebe0ff",

    border: "none",
  },

  question: {
    fontSize: "2.5rem",
    padding: "2rem",

    $nest: {
      "@media screen and (max-width: 1100px)": {
        fontSize: "2rem",
      },
    },
  },

  nextBtn: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    marginTop: "1rem",
    padding: "3rem",
  },
});

const QuizPage = (props) => {
  const newDatas = shuffle(datas);
  const [index, setIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const { handleGoBack } = props;

  const handleSubmit = (score) => {
    if (index < newDatas.length - 1) {
      setIndex(index + 1);
    } else {
      setTotalScore(score);
    }
  };

  const goBack = () => {
    setTimeout(() => {
      handleGoBack();
    }, 400);
  };

  return (
    <div>
      {!totalScore ? (
        <div className={classNames.page}>
          <Button onClick={goBack}>Go Back</Button>
          <div className={classNames.data}>
            <div className={classNames.question}>
              {newDatas[index].question}
            </div>
            <div>
              <Options
                index={newDatas[index]}
                options={shuffle(newDatas[index].options)}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      ) : (
        <FinalScore finalScore={totalScore} />
      )}
    </div>
  );
};

export default QuizPage;
