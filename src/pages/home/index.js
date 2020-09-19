import React from "react";
import banner from "../../assets/quiz.jpg";

import { stylesheet } from "typestyle";
import Login from "./login";

const classNames = stylesheet({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  image: {
    margin: "2rem",
  },
});

const Home = () => {
  return (
    <div className={classNames.container}>
      <div className={classNames.image}>
        <img src={banner} alt="quiz" />
      </div>
      <div className="login">
        <Login />
      </div>
    </div>
  );
};

export default Home;
