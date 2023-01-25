import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styles from "./HangmanDrawing.module.css";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  const head = <div className={styles.head}></div>;
  const body = <div className={styles.body}></div>;
  const rightArm = <div className={styles.rightArm}></div>;
  const leftArm = <div className={styles.leftArm}></div>;
  const rightLeg = <div className={styles.rightLeg}></div>;
  const leftLeg = <div className={styles.leftLeg}></div>;

  const bodyArray = [head, body, rightArm, leftArm, rightLeg, leftLeg];

  return (
    <div className={styles.drawSection}>
      {bodyArray.slice(0, numberOfGuesses)}
      <div className={styles.drawTop}></div>
      <div className={styles.drawHang}></div>
      <div className={styles.drawUpright}></div>
      <div className={styles.drawBottom}></div>
    </div>
  );
};
