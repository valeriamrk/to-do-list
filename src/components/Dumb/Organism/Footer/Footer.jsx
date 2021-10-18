import React from "react";
import MyButton from "../../Atoms/Button/MyButton";
import * as S from "./styles"

const Footer = (props) => {
  return (
    <S.FooterContainer>
      <MyButton onClick={() => props.removeAllTasks()}>Clear all</MyButton>
    </S.FooterContainer>
  );
};

export default Footer;
