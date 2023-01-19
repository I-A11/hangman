import { useState } from "react";
import words from "./wordList.json";
import "./App.css";
import { HangmanDrawing } from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function App() {
  const getWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  console.log(wordToGuess);

  return (
    <div className='game-section'>
      <div className='result'>lose win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
