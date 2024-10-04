import React from "react";
import "./game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>GAME</h1>
      <button onClick={verifyLetter}>FINALIZAR JOGO</button>
      <h2>PALAVRA</h2>
    </div>
  );
};

export default Game;
