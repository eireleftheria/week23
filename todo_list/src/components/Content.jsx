import "./content.css";
import React from "react";
import ListItem from "./Listitem";

function Content() {
  return (
    <React.Fragment>
      <ListItem name="Посмотреть урок по Реакту" />
      <ListItem name="Сделать домашку" />
      <ListItem name="Отдохнуть" />
      <ListItem name="Приготовить ужин" />
    </React.Fragment>
  );
}

export default Content;
