import { useState } from "react";
import styles from "./listItem.module.css";

function ListItem(props) {
  const [checked, setChecked] = useState(false);

  const handleCheckedState = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.item} {...props}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onClick={handleCheckedState}
      ></input>
      <label
        style={
          checked
            ? { textDecorationLine: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.name}
      </label>
      <button className={styles.button}>Удалить</button>
    </div>
  );
}

export default ListItem;
