

import React from "react";
// import "./styles.css";

export default function PlayGame() {
  function play() {
    console.log("You Won!");
  }

  return (
    <div onClick={play()}>
      <p>click button to start playing</p>
      <button onClick={play}>Play Game</button>
    </div>
  );
}