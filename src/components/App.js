import React, { Component, useState } from "react";
import "./../styles/App.css";
export default function App() {
  const [click, setClick] = React.useState(false);
  let isClicked = () => {
    let copyClick = click;
    copyClick = true;
    setClick(copyClick);
  };
  return (
    <div id="main">
      <button id="click" onClick={() => isClicked()}>
        Click
      </button>
      {click && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}
