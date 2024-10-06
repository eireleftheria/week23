import React from "react";
import ListItem from "./Listitem";
import AddButton from "./AddButton";
import styles from "./content.module.css";

function Content() {
  const items = [
    { id: 1, name: "Посмотреть урок по Реакту", isCheked: false, color: "red" },
    { id: 2, name: "Сделать домашку", isCheked: false, color: "black" },
    { id: 3, name: "Отдохнуть", isCheked: true, color: "blue" },
    { id: 4, name: "Приготовить ужин", isCheked: false, color: "green" },
  ];

  return (
    <main className={styles.content}>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} name={item.name} color={item.color} />
        ))}
      </ul>
      <AddButton />
    </main>
  );
}

export default Content;
