import styles from "./HangmanWord.module.css";

type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
};

const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
  return (
    <div className={styles.wordSection}>
      {wordToGuess.split("").map((letter, index) => {
        return (
          <div key={index}>
            <span
              className={
                guessedLetters.includes(letter)
                  ? `${styles.visible}`
                  : `${styles.hidden}`
              }
            >
              {letter}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HangmanWord;
