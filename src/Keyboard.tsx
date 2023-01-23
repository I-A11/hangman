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
const Keyboard = () => {
  return (
    <div className={styles.keySection}>
      {keys.map((key) => {
        return (
          <button className={`${styles.btn} `} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
