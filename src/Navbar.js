import React from "react";
import MovingTrain from "./MovingTrain/MovingTrain";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* <div className="navBottom"> */}
      {/* <MovingTrain /> */}
      {/* </div> */}
    </header>
  );
};

export default Navbar;
