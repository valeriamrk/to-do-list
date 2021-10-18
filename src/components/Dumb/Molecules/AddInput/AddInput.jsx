import React, { useState } from "react";
import * as S from "./styles";
import MyButton from "../../Atoms/Button/MyButton";
import InputField from "../../Atoms/InputField/InputField";

const AddInput = (props) => {
  const [valueInput, setValueInput] = useState("");

  const addNewTask = (e, valueInput) => {
    e.preventDefault();

    if (valueInput.length !== 0) {

      props.addNewTask(valueInput);

      setValueInput("");
    }
  };

  return (
    <S.AddTaskContainer>
      <S.InputItem>
        <InputField
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          placeholder="add your task"
          type="text"
        />
        <MyButton onClick={(e) => addNewTask(e, valueInput)}>Add</MyButton>
      </S.InputItem>
    </S.AddTaskContainer>
  );
};

export default AddInput;
