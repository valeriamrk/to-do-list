import React from "react";
import * as S from "./styles"

const MyButton = ({ children, ...props }) => {
  return (
    <div>
      <S.Button {...props}>{children}</S.Button>
    </div>
  );
};

export default MyButton;
