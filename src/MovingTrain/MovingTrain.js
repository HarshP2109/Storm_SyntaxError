import React from "react";
import "./MovingTrain.css";

const MovingTrain = () => {
  return (
    <div className="outside">
      <div className="train first">
        <div className="windows big"></div>
        <div className="yellow"></div>
        <div className="door">
          <div className="windows"></div>
        </div>
      </div>
      <div className="train">
        <div className="windows left"></div>
        <div className="door">
          <div className="windows"></div>
        </div>
        <div className="yellow"></div>
        <div className="windows right"></div>
      </div>
      <div className="train">
        <div className="windows left"></div>
        <div className="door">
          <div className="windows"></div>
        </div>
        <div className="yellow"></div>
        <div className="windows right"></div>
      </div>
      <div className="train">
        <div className="windows left"></div>
        <div className="door">
          <div className="windows"></div>
        </div>
        <div className="yellow"></div>
        <div className="windows right"></div>
      </div>
      <div className="train last">
        <div className="windows big"></div>
        <div className="yellow"></div>
        <div className="door">
          <div className="windows"></div>
        </div>
      </div>
    </div>
  );
};

export default MovingTrain;
