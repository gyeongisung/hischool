import styled from "@emotion/styled";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 21vw;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const DeleteButton = styled.div`
  position: absolute;
  right: 47.2%;
  cursor: pointer;
`;

export const DropDownUl = styled.ul`
  width: 21vw;
  display: block;
  padding: 10px 0;
  background-color: #fff;
  border: 1px solid #bbb;
  border-top: none;
  border-radius: 0 0 16px 16px;
  list-style-type: none;
  z-index: 3;
`;

export const DropDownLi = styled.li`
  padding: 0 15px;
  font-size: 16px;
  &.selected {
    background-color: lightblue;
  }
`;
