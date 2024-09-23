import styles from "./listItem.module.css";

function ListItem(props) {
  return (
    <div className={styles.item}>
      <input type="checkbox" className={styles.checkbox}></input>
      <label className={styles.label}>{props.name}</label>
      <button className={styles.button}>Удалить</button>
    </div>
  );
}

export default ListItem;
