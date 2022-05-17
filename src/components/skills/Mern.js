import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Mern = () => {
  const percentage = 66;

  return (
    <div className="w-75 h-75">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "20px",

          // Colors
          pathColor: "#3e64ff",
          textColor: "black",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
};

export default Mern;
