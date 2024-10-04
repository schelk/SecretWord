import React from "react";
import "./game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <button onClick={verifyLetter}>FINALIZAR JOGO</button>
      {/* <div id="bck-btn">
        <button className="previousPage">PÁGINA ANTERIOR</button>
      </div> */}
    </div>
  );
};

export default Game;
