import { React, useState } from "react";
import ListItem from "./Listitem";
import AddItem from "./AddItem";
import styles from "./content.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

function Content() {
  // const items = [
  //   { id: 1, name: "Посмотреть урок по Реакту", isCheked: false, color: "red" },
  //   { id: 2, name: "Сделать домашку", isCheked: false, color: "black" },
  //   { id: 3, name: "Отдохнуть", isCheked: true, color: "blue" },
  //   { id: 4, name: "Приготовить ужин", isCheked: false, color: "green" },
  // ];

  // const itemsJSON = [
  //   {
  //     id: 1,
  //     name: "Посмотреть урок по Реакту",
  //     isChecked: false,
  //     color: "red",
  //   },
  //   { id: 2, name: "Сделать домашку", isChecked: false, color: "black" },
  //   { id: 3, name: "Отдохнуть", isChecked: true, color: "blue" },
  //   { id: 4, name: "Приготовить ужин", isChecked: false, color: "green" },
  // ];

  const [items, setItems] = useLocalStorage("toDoList", []);
  const [newItem, setNewItem] = useState("");

  const deleteItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  const addItem = (e) => {
    e.preventDefault();
    console.log(newItem);
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const itemToAdd = { id, name: newItem, isChecked: false };
    const updatedList = [...items, itemToAdd];
    setItems(updatedList);
    setNewItem("");
  };

  return (
    <main className={styles.content}>
      <ul>
        {items.map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
            color={item.color}
            deleteItem={() => deleteItem(item.id)}
          />
        ))}
      </ul>
      <AddItem newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
    </main>
  );
}

export default Content;
