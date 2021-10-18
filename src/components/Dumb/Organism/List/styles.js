import styled from "styled-components";

// 1. List

export const TasksContainer = styled.div`
  width: 100%;
  /* margin-bottom: 10px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background-color: rgb(248, 248, 246); */
  /* border: 0.5px solid black; */
  /* padding: 8px; */
  margin-top: 5px;
`;


// 2. ListItem

export const StyledList = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  background-color: rgb(248, 248, 246);
  /* border: 0.5px solid black; */
  padding: 8px;
  margin: 5px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  /* border: 0.5px solid black; */
  margin-left: 20px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  /* border: 0.5px solid black; */
  margin-right: 20px;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  /* border: 0.5px solid black; */
  margin-right: 20px;
  margin-left: 20px;
  min-width: 0;
`;

export const EditContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(248, 248, 246);
  /* border: 0.5px solid black; */
  padding: 8px;


  /* 
    width: 235px;
    outline: none;
    font-size: 13px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 10px; */
`;

export const TaskText = styled.div`
  /* border: 0.5px solid black; */
  /* text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
  border: 2px solid; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;

`;