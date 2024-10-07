import React from "react";
import "./game.css";

const Game = ({ verifyLetter, word, category }) => {
  return (
    <div>
      <h1>GAME</h1>
      <button onClick={verifyLetter}>FINALIZAR JOGO</button>
    </div>
  );
};

export default Game;
