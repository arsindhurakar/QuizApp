import React, { useState } from "react";
import Modal from "react-modal";

import { BsCheckCircle } from "react-icons/bs";

import { stylesheet } from "typestyle";

import { Colors } from "../../constants/colors";
import Button from "../../components/button";

import { useHistory } from "react-router";

Modal.setAppElement("#root");

const classNames = stylesheet({
  modalScore: {
    width: "380px",
    height: "28rem",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    padding: "1rem",
    background: "#F5F5F5",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px -3px rgba(158,155,155,0.9)",
  },

  finalScore: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: Colors.GREY,
  },

  head: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
  },

  icon: {
    fontSize: "6rem",
    color: Colors.SUCCESS,
  },

  scoreDescription: {
    fontSize: "1.5rem",
  },

  score: {
    fontSize: "2.5rem",
    color: Colors.BLACK,
  },

  goAgain: {
    padding: "8px",
    cursor: "pointer",
  },
});

const FinalScore = (props) => {
  const { finalScore } = props;

  const [isModalOpen, setIsModalOpen] = useState(true);

  const history = useHistory();

  const handleAgain = () => {
    setIsModalOpen(false);
    history.push("/dashboard");
    window.location.reload();
  };

  return (
    <Modal className={classNames.modalScore} isOpen={isModalOpen}>
      <div className={classNames.finalScore}>
        <div className={classNames.head}>Congratulations</div>
        <div className={classNames.icon}>
          <BsCheckCircle />
        </div>

        <div className={classNames.scoreDescription}>Your Score is</div>
        <div className={classNames.score}>{finalScore}</div>
        <div className={classNames.again}>
          <Button onClick={handleAgain} width="full" buttonType="primary">
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FinalScore;
