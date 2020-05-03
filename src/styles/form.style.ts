import styled from "styled-components";

export const Inputs = styled.input`
  width: 320px;
  margin: 15px 0 5px 0;
  padding: 20px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: rgb(255, 255, 255, 0.2);
  color: #f9f9f9;
  outline: none;
  font-size: 1em;
  font-weight: 100;
  ::placeholder {
    color: #f9f9f9;
  }
`;

export const Buttons = styled.button`
  width: 30px;
  height: 34px;
  margin: 8px 0 0 -37px;
  box-sizing: border-box;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
`;
