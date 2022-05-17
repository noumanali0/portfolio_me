import React from "react";
import { ProgressBar } from "react-bootstrap";

const Express = () => {
  const now = 70;
  return (
    <div className="w-100 ">
      <ProgressBar now={now} label={`${now}%`} />
    </div>
  );
};

export default Express;
