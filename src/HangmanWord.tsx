import styles from "./HangmanWord.module.css";

type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className={styles.wordSection}>
      {wordToGuess.split("").map((letter, index) => {
        return (
          <div key={index}>
            <span
              className={
                guessedLetters.includes(letter) || reveal
                  ? `${styles.visible}`
                  : `${styles.hidden}`
              }
              style={{
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
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
