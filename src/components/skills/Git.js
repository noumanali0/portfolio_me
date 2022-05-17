import React from "react";
import { ProgressBar } from "react-bootstrap";

const Git = () => {
  const now = 75;
  return (
    <div className="w-100 ">
      <ProgressBar now={now} label={`${now}%`} />
    </div>
  );
};

export default Git;
