import React, { Component, useState } from "react";
import "./../styles/App.css";

function Paragraph() {
  const [para, setPara] = useState("");

  const handleClick = () => {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };
  return (
    <>
      <button id="click" onClick={handleClick}>
        Click
      </button>
      <p id="para">{para}</p>
    </>
  );
}

export default Paragraph;
