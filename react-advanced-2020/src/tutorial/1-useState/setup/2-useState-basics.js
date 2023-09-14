import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Mom, are the predators nearby?");

  const handleClick = () => {
    if (text === "Mom, are the predators nearby?") {
      setText("My speed potato, we are the predators.");
    } else if (text === "My speed potato, we are the predators.") {
      setText("We are?! :O");
    } else {
      setText("Mom, are the predators nearby?");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
