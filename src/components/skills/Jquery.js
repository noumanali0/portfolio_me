import React from "react";
import { ProgressBar } from "react-bootstrap";

const Jquery = () => {
  const now = 50;
  return (
    <div className="w-100 ">
      <ProgressBar now={now} label={`${now}%`} />
    </div>
  );
};

export default Jquery;
