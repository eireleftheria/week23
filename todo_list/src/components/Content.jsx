import { React } from "react";
import ListItem from "./Listitem";
import AddButton from "./AddButton";
import styles from "./content.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

function Content() {
  // const items = [
  //   { id: 1, name: "Посмотреть урок по Реакту", isCheked: false, color: "red" },
  //   { id: 2, name: "Сделать домашку", isCheked: false, color: "black" },
  //   { id: 3, name: "Отдохнуть", isCheked: true, color: "blue" },
  //   { id: 4, name: "Приготовить ужин", isCheked: false, color: "green" },
  // ];

  const [items, setItems] = useLocalStorage("toDoList", []);

  // useEffect(() => {
  //   setItems(JSON.parse(localStorage.getItem("toDoList")));
  // }, []);

  const deleteItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
    // localStorage.setItem("toDoList", JSON.stringify(updatedList));
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
      <AddButton />
    </main>
  );
}

export default Content;
