import styles from "./Keyboard.module.css";
const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};
const Keyboard = ({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div className={styles.keySection}>
      {keys.map((key) => {
        const active = activeLetters.includes(key);
        const inactive = inactiveLetters.includes(key);
        return (
          <button
            className={`${styles.btn} ${active ? styles.active : ""} ${
              inactive ? styles.inactive : ""
            } `}
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={active || inactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
