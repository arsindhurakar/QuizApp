import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h4>404 Not Found</h4>
      <Link to={"/"}>Go Back</Link>
    </div>
  );
};

export default NotFound;
