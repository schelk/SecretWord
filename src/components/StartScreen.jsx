import React from "react";
import "./styles/StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>clique no botão para iniciar o jogo</p>
      <button onClick={startGame}>jogar</button>
    </div>
  );
};

export default StartScreen;
