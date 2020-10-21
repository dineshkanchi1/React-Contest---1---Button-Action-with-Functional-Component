import React, { Component, useState } from "react";
import "./../styles/App.css";

export default function Paragraph() {
  const [para, setPara] = React.useState("");

  const handleClick = () => {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy "
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
