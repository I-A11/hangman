import { useState, useEffect, useCallback } from "react";
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

  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  const activeLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className='game-section'>
      <h1>Hangman Game</h1>
      <div className='result'>
        {isWinner
          ? "Winner! - Refresh to try again"
          : isLoser
          ? "Nice try! - Refresh to try again"
          : ""}
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div className='stretch'>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={activeLetters}
          inactiveLetters={inCorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
