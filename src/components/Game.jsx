import React from "react";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <button onClick={verifyLetter}>FINALIZAR JOGO</button>
      <button className="previousPage">PÁGINA ANTERIOR</button>
    </div>
  );
};

export default Game;
