import React from "react";
import "./Pc.css";
import bg from "../Assets/bg.png";
const Pc = () => {
  const ROTATION = 10;

  const handleMove = (e) => {
    const { clientX, clientY, currentTarget } = e;

    const rect = currentTarget.getBoundingClientRect();

    let horizontal = (clientX - rect.left) / rect.width;
    let vertical = (clientY - rect.top) / rect.height;

    horizontal = (0.5 - horizontal) * ROTATION;
    vertical = (0.5 - vertical) * -ROTATION;

    const rotateX = horizontal.toFixed(2);
    const rotateY = vertical.toFixed(2);

    currentTarget.style.transform = `perspective(${rect.width}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  const handleLeave = (e) => {
    const { currentTarget } = e;
    currentTarget.style.transform = "none";
  };

  return (
    <div className="wrapper">
      <div className="hover">
        <div
          className="image-container"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <img
            className="device"
            src="https://iili.io/HLEhQaV.png"
            alt="Laptop"
          />
          <img src={bg} alt="UI/UX Dashboard" className="screen" />
        </div>
      </div>
    </div>
  );
};

export default Pc;
