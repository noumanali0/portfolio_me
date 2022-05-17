import React from "react";
import { ProgressBar } from "react-bootstrap";

const Mongodb = () => {
  const now = 60;
  return (
    <div className="w-100 ">
      <ProgressBar now={now} label={`${now}%`} />
    </div>
  );
};

export default Mongodb;
