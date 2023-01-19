import React from "react";
import styles from "./HangmanDrawing.module.css";

export const HangmanDrawing = () => {
  const head = <div className={styles.head}></div>;
  const body = <div className={styles.body}></div>;
  const rightArm = <div className={styles.rightArm}></div>;
  const leftArm = <div className={styles.leftArm}></div>;
  const rightLeg = <div className={styles.rightLeg}></div>;
  const leftLeg = <div className={styles.leftLeg}></div>;

  return (
    <div className={styles.drawSection}>
      {head}
      {body}
      {rightArm}
      {leftArm}
      {rightLeg}
      {leftLeg}
      <div className={styles.drawTop}></div>
      <div className={styles.drawHang}></div>
      <div className={styles.drawUpright}></div>
      <div className={styles.drawBottom}></div>
    </div>
  );
};
