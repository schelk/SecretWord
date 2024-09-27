//REACT
import React from "react";
import { useCallback, useEffect, useState } from "react";

//CSS
import "./App.css";
import StartScreen from "./components/StartScreen.jsx";
import Game from "./components/Game.jsx";
import End from "./components/End.jsx";
//DATA
import { wordsList } from "./data/words.jsx";

//Stages -> Seta os estágios da página
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //State -> pagina anterior
  const [prevPage, setPrevPage] = useState(stages[1].name);

  //Função que começa o jogo
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // processa a entrada de caracteres (atualmente esta com a função de passa o estagios)
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const goBack = () => {
    setPrevPage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <End />}
    </div>
  );
}

export default App;
