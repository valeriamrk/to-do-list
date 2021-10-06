import React from "react";
import ListItem from "./ListItem";
import styles from "./Items.module.css";
import * as S from "./styles"

const AllLists = (props) => {
  return (
    <div className={styles.AllLists}>
      {props.data.map((element, index) => (
        <ListItem
          id={element.id}
          value={element.value}
          removeTask={props.removeTask}
          editTask={props.editTask}
          number={index + 1}
        />
      ))}
    </div>
  );
};

export default AllLists;
