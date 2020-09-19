import React, { useState } from "react";

import { stylesheet, classes } from "typestyle";

import Button from "../../components/button/buttonDashboard";

const classNames = stylesheet({
  options: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "space-between",
  },

  btn: {
    border: "none",

    background: "#0000",
    outline: "none",
    margin: "0 2.5rem",
    cursor: "pointer",
    fontSize: "1.5rem",

    $nest: {
      "@media screen and (max-width: 1100px)": {
        fontSize: "1.2rem",
      },

      "&:hover": {
        opacity: "0.5",
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

  answerCorrect: {
    color: "green",
  },

  answerIncorrect: {
    color: "red",
  },

  noHover: {
    $nest: {
      "&:hover": {
        opacity: "1",
      },
    },
  },
});

const Options = (props) => {
  const { index, options, handleSubmit } = props;

  const [enabled, setEnabled] = useState(false);
  const [score, setScore] = useState(0);
  const [correctIndex, setCorrectIndex] = useState();
  const [incorrectIndex, setIncorrectIndex] = useState();
  const [selected, setSelected] = useState(false);
  const [hoverRemove, setHoverRemove] = useState(false);

  const handleClick = (option, indexOption) => {
    if (selected) return;
    if (option === index.correctAnswer) {
      setCorrectIndex(indexOption);
      setScore(score + 5);
    } else {
      let correctAnswerIndex;
      options.forEach((option, indexOption) => {
        if (option === index.correctAnswer) correctAnswerIndex = indexOption;
      });
      setIncorrectIndex(indexOption);
      setCorrectIndex(correctAnswerIndex);
    }
    setSelected(true);
    setEnabled(true);
    setHoverRemove(true);
  };

  const handleNext = () => {
    setSelected(false);
    setEnabled(false);
    handleSubmit(score);
    setCorrectIndex();
    setIncorrectIndex();
    setHoverRemove(false);
  };

  return (
    <div className={classes(classNames.options)}>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            className={classes(
              classNames.btn,
              correctIndex === index && classNames.answerCorrect,
              incorrectIndex === index && classNames.answerIncorrect,
              hoverRemove ? classNames.noHover : ""
            )}
            onClick={() => handleClick(option, index)}
          >
            {option}
          </button>
        );
      })}
      <div className={classNames.nextBtn}>
        <Button disabled={enabled ? false : true} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Options;
