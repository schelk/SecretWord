//REACT
import React from "react";
import { useCallback, useEffect, useState } from "react";

//CSS
import "./App.css";
import StartScreen from "./components/StartScreen.jsx";

//DATA
import { wordsList } from "./data/words.jsx";

function App() {
  //Stages -> Seta os estágios da página
  const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
  ];

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "game" && <End />}
    </div>
  );
}

export default App;
