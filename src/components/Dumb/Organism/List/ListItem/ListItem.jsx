import React, { useEffect, useState } from "react";
import MyButton from "../../../Atoms/Button/MyButton";
import InputField from "../../../Atoms/InputField/InputField";
import * as S from "../styles";
import Checkbox from "../../../Atoms/Checkbox/Checkbox";

const ListItem = (props) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const activateEditMode = (id) => {
    props.changeEditModeTrue(id);
  };

  const deactivateEditMode = (id, value) => {
    props.editTask(id, value);
  };

  const onValueChange = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      {props.editMode ? (
        <S.EditContainer>
          <InputField
            value={value}
            autoFocus={true}
            onChange={onValueChange}
          ></InputField>
          <MyButton onClick={() => deactivateEditMode(props.id, value)}>
            Ok
          </MyButton>
        </S.EditContainer>
      ) : (
        <S.StyledList>
          <S.LeftContainer>
            <Checkbox
              id={props.id}
              done={props.done}
              doneTask={props.doneTask}
            />
          </S.LeftContainer>

          <S.CenterContainer>
            <S.TaskText done={props.done}>{props.value}</S.TaskText>
          </S.CenterContainer>

          <S.RightContainer>
            {!props.done && (<MyButton onClick={() => activateEditMode(props.id)}>Edit</MyButton>)}
            {/* <MyButton onClick={() => activateEditMode(props.id)}>Edit</MyButton> */}
            <MyButton onClick={() => props.removeTask(props.id)}>
              Delete
            </MyButton>
          </S.RightContainer>
        </S.StyledList>
      )}
    </>
  );
};

export default ListItem;
