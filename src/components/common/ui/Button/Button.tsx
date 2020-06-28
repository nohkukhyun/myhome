import React from "react";
import styled from "styled-components";

type ButtonProps = {
  title?: string;
  onClick: () => void;
  style?: {} | React.CSSProperties;
};

const ButtonBox = styled.button<ButtonProps>`
  color: #333;
  outline: none;
  border: 0px;
  padding: 7px 30px;
  background-color: #fff;
  cursor: pointer;
  &:active {
  }
`;

function Button({ title, style, onClick }: ButtonProps) {
  return (
    <ButtonBox onClick={onClick} style={style}>
      {title}
    </ButtonBox>
  );
}

export default Button;
