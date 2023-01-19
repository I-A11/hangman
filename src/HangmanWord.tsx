import styles from "./HangmanWord.module.css";

const HangmanWord = () => {
  const word = "test";
  return (
    <div className={styles.wordSection}>
      {word.split("").map((letter, index) => {
        return <span>{letter}</span>;
      })}
    </div>
  );
};

export default HangmanWord;
