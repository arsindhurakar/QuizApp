import React from "react";

import { stylesheet } from "typestyle";

const classNames = stylesheet({
  content: {
    background: "#000000",
    // display: "flex",
    // width: "100%",
    // padding: "1rem",
    // minHeight: "90vh",
  },
});

const Content = (props) => {
  const { children } = props;
  return <div className={classNames.content}> {children}</div>;
};

export default Content;
