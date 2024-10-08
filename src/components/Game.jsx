import React from "react";
import "./styles/game.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  pickedLetters,
  guessedLetters,
  guesses,
  wrongLetters,
  score,
}) => {
  return (
    <div className="game">
      <p className="points">
        PONTUAÇÃO: <span>{score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>

      <div className="wordContainer">
        {pickedLetters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i}>{letter}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>

      <div className="letterContainer">
        <p>
          Tente acertar uma <span>letra</span>:
        </p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>enviar</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras erradas</p>
        <span>
          {wrongLetters.map((letter, i) => (
            <span>{letter}</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Game;
