import React from "react";

import { stylesheet } from "typestyle";

const Layout = (props) => {
  const classNames = stylesheet({
    layout: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      background: "#000000",
    },
  });

  const { children } = props;
  return <div className={classNames.layout}>{children}</div>;
};

export default Layout;
