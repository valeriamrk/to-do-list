import React, { useEffect } from "react";
import ListItem from "./ListItem/ListItem";
import * as S from "./styles"

const List = (props) => {

  return (
    <S.TasksContainer>
      {props.data.map((element) => (
        <ListItem
          id={element.id}
          value={element.value}
          done={element.done}
          removeTask={props.removeTask}
          editTask={props.editTask}
          editMode={element.editMode}
          changeEditModeTrue={props.changeEditModeTrue}
          doneTask={props.doneTask}
        />
      ))}
    </S.TasksContainer>
  );
};

export default List;
