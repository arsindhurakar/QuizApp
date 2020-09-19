import React from "react";
import { Colors } from "../../constants/colors";

import { stylesheet, classes } from "typestyle";

const classNames = stylesheet({
  btn: {
    background: "#0000",
    border: "none",
    fontSize: "1.5rem",
    color: "#77cf25",
    cursor: "pointer",
    outline: "none",

    $nest: {
      "&:hover": {
        opacity: "0.5",
      },
    },
  },

  disabled: {
    color: Colors.GREY,
    cursor: "not-allowed",

    $nest: {
      "&:hover": {
        opacity: "1",
      },
    },
  },
});

const Button = (props) => {
  const { children, disabled = false, onClick } = props;
  return (
    <div>
      <button
        className={classes(
          classNames.btn,
          disabled ? classNames.disabled : classNames.btn
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
