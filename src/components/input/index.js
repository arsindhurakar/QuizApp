import React from "react";

import { stylesheet, classes } from "typestyle";

const classNames = stylesheet({
  input: {
    width: "100%",
    padding: "1rem",
    border: `1px solid #dcdcdc`,
    borderRadius: "5px",
    marginBottom: "1rem",
    outline: "0",
  },

  small: {
    padding: "10px",
    marginBottom: "10px",
  },
});

const Input = (props) => {
  const { placeholder, type, inputType = "large", ...rest } = props;
  return (
    <div>
      <input
        className={classes(
          classNames.input,
          inputType !== "large" ? classNames.small : ""
        )}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
