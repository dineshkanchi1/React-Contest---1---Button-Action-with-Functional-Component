import React, { Component, useState } from "react";
import "./../styles/App.css";

export default function Paragraph() {
  const [para, setPara] = React.useState("");

  const handleClick = () => {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
    let container = document.getElementById("container");
    let p = document.createElement("p");
    p.setAttribute("id", "para");
    p.innerHTML = p;
    container.appendChild(p);
  };
  return (
    <div id="container">
      <button id="click" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}
