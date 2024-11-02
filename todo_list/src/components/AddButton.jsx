import React from "react";
import styles from "./addButton.module.css";

export default function AddButton() {
  // const handleClick = (event) => {
  //   console.log("hello", event);
  // };

  const handleClick1 = (name, event) => {
    console.log("hello " + name, event.target);
  };

  return (
    <button
      className={styles.button}
      onClick={(event) => {
        handleClick1("Maria", event);
      }}
    >
      Добавить
    </button>
  );
}
