import React, { useState } from "react";

import { stylesheet } from "typestyle";
import Button from "../../components/button/buttonDashboard";
import banner from "../../assets/quiz-logo.jpg";

import QuizPage from "./quizPage";

const classNames = stylesheet({
  container: {
    display: "flex",
    justifyContent: "center",
  },

  contains: {
    position: "relative",
  },

  btn: {
    position: "absolute",
    bottom: "33%",
    left: "30%",
  },

  image: {
    width: "30rem",
  },
});

const QuizStart = () => {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setTimeout(() => {
      setStart(true);
    }, 400);
  };

  const handleGoBack = () => {
    setStart(false);
  };

  return (
    <div className={classNames.container}>
      {!start ? (
        <div className={classNames.contains}>
          <img className={classNames.image} alt="Start Quiz" src={banner} />
          <div className={classNames.btn}>
            <Button onClick={handleStart}>Start</Button>
          </div>
        </div>
      ) : (
        <QuizPage handleGoBack={handleGoBack} />
      )}
    </div>
  );
};

export default QuizStart;
