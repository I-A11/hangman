import styles from "./HangmanWord.module.css";

const HangmanWord = () => {
  const word = "test";
  const guessedLetters = ["t", "e", "g"];
  return (
    <div className={styles.wordSection}>
      {word.split("").map((letter, index) => {
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
