import React from "react";

import { stylesheet } from "typestyle";

const classNames = stylesheet({
  topbar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",

    background: "#000000",

    padding: "1rem",
  },
});

const Topbar = (props) => {
  const { children } = props;
  return <div className={classNames.topbar}>{children}</div>;
};

export default Topbar;
