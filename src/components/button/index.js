import React from "react";

import { Colors } from "../../constants/colors";
import { stylesheet, classes } from "typestyle";

const classNames = stylesheet({
  btn: {
    border: "none",
    cursor: "pointer",
    padding: "1rem",
    outline: "0",
    borderRadius: "5px",
    marginBottom: "1rem",

    $nest: {
      "&:hover": {
        opacity: 0.9,
      },
    },
  },

  fullWidth: {
    width: "100%",
  },

  primary: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
  },

  secondary: {
    backgroundColor: Colors.SECONDARY,
    color: Colors.WHITE,
  },

  center: {
    display: "block",
    maxWidth: "300px",
    margin: "auto",
  },
});

const Button = (props) => {
  const {
    children,
    width = "auto",
    type = "button",
    buttonType = "secondary",
    position = "auto",
    onClick,
  } = props;
  return (
    <div>
      <button
        className={classes(
          classNames.btn,
          width !== "auto" ? classNames.fullWidth : "",
          buttonType !== "secondary"
            ? classNames.primary
            : classNames.secondary,
          position !== "auto" ? classNames.center : ""
        )}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
