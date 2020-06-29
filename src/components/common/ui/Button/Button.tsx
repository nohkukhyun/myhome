import React from "react";
import * as S from "./button.styled";

type ButtonProps = {
  title?: string;
  onClick: () => void;
  style?: {} | React.CSSProperties;
};

function Button({ title, style, onClick }: ButtonProps) {
  return (
    <S.ButtonBox onClick={onClick} style={style}>
      {title}
    </S.ButtonBox>
  );
}

export default Button;
