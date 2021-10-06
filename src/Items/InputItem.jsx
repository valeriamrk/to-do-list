import React, { useState } from "react";
import MyButton from "../components/MyButton";
import InputField from "../components/InputField";
import styles from "./Items.module.css";
import { v4 as uuidv4 } from "uuid";
import * as S from "./styles"


const InputItem = ({ create }) => {
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
    <form>
      <S.InputItem>
        <InputField
          value={tasks.value}
          onChange={(e) => setTask({ ...tasks, value: e.target.value })}
          placeholder="add your task"
          type="text"
        />
        <MyButton onClick={addNewTask}>Add</MyButton>
      </S.InputItem>
    </form>
  );
};

export default InputItem;
