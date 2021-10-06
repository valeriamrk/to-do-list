import React from "react";
import MyButton from "../components/MyButton";

const Footer = (props) => {
  return (
    <div>
      <MyButton onClick={() => props.removeAllTasks()}>Clear all</MyButton>
    </div>
  );
};

export default Footer;
