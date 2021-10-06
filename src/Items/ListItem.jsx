import React, { useEffect, useState } from "react";
import MyButton from "../components/MyButton";
import { InputField } from "../components/styles";
import styles from "./Items.module.css";
import * as S from "./styles"


const ListItem = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateValue(value);
  };

  const onValueChange = (e) => {
    setValue(e.currentTarget.value);
  };


  return (
    <div>
      {!editMode && (
        <S.StyledList>
          <S.ListItem>
            <input type="checkbox"></input>
            {props.number}. {props.value} 
          </S.ListItem>
          {/* <MyButton onClick={() => props.editTask(props.id)}>Edit1</MyButton> */}
          <MyButton onClick={activateEditMode}>Edit</MyButton>
          <MyButton onClick={() => props.removeTask(props.id)}>Delete</MyButton>
        </S.StyledList>
      )}
      {editMode && (
        <div>
          <InputField
            value={value}
            autoFocus={true}
            onChange={onValueChange}
          ></InputField>
          <MyButton onClick={deactivateEditMode}>Ok</MyButton>
        </div>
      )}
    </div>
  );
};

export default ListItem;
