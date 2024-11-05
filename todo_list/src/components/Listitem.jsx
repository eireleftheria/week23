import { useState } from "react";
import styles from "./listItem.module.css";

function ListItem({ id, name, deleteItem }) {
  const [checked, setChecked] = useState(false);

  const handleCheckedState = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={handleCheckedState}
      ></input>
      <label
        style={
          checked
            ? { textDecorationLine: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {name}
      </label>
      <button className={styles.button} onClick={() => deleteItem(id)}>
        Удалить
      </button>
    </div>
  );
}

export default ListItem;
