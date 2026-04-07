import React from "react";
import { calculateProgress } from "../utils/helpers";

const ProgressBar = ({ steps }) => {
  const progress = calculateProgress(steps);

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>Completion Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="pb-bg">
        <div className="pb-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
