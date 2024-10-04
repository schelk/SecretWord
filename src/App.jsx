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
  const [words, setWords] = useState(wordsList);

  //

  //

  const pickWordAndCategory = () => {
    const categories = Object.keys(wordsList);
    console.log(categories); //Lista as categorias
    const category = categories[Math.floor(Math.random() * categories.length)];
    console.log(category);
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);
  };

  const startGame = () => {
    //Função que começa o jogo
    pickWordAndCategory();
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    // processa a entrada de caracteres (atualmente esta com a função de passa o estagios)
    setGameStage(stages[2].name);
  };

  //Acaba com o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <End retry={retry} />}
    </div>
  );
}

export default App;
