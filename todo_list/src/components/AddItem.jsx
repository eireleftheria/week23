import { React, useRef } from "react";
import styles from "./addButton.module.css";

export default function AddItem({ newItem, setNewItem, addItem }) {
  // const [category, setCategory] = useState("home");

  const ref = useRef();

  const focus = () => {
    ref.current.focus();
  };

  return (
    <form className={styles.create}>
      <input
        ref={ref}
        type="text"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      {/* <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="studies">Учёба</option>
        <option value="home">Домашние дела</option>
      </select> */}
      <button type="submit" onClick={addItem}>
        Добавить
      </button>
      <button onClick={focus}>Focus</button>
      <p>{newItem}</p>
      {/* <p>{category}</p> */}
    </form>
  );
}
