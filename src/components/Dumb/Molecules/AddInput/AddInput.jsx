import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./styles"
import MyButton from "../../Atoms/Button/MyButton";
import InputField from "../../Atoms/InputField/InputField";


const AddInput = ({ create }) => {
  const [tasks, setTask] = useState({ value: "" });

  const addNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      ...tasks,
      id: uuidv4(),
    };

    create(newTask);
    setTask({ value: "" });
  };

  

  return (
    <S.AddTaskContainer>
      <S.InputItem>
        <InputField
          value={tasks.value}
          onChange={(e) => setTask({ ...tasks, value: e.target.value })}
          placeholder="add your task"
          type="text"
        />
        <MyButton onClick={addNewTask}>Add</MyButton>
      </S.InputItem>
    </S.AddTaskContainer>
  );
};

export default AddInput;
