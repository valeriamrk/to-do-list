import React from "react";
import MyButton from "../../Atoms/Button/MyButton";
import * as S from "./styles"

const Footer = (props) => {
  console.log(props.data)
  return (
    <S.FooterContainer>
      {props.data.length !== 0 ? (<MyButton onClick={() => props.removeAllTasks()}>Clear all</MyButton>)
      : (<p>no tasks yet</p>)}
    </S.FooterContainer>
  );
};

export default Footer;
