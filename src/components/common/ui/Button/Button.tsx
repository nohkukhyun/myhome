import React from "react"
import styled from "styled-components"

type ButtonProps = {
  title?: string
  onClick: () => void
  backgroundColor?: string
  style?: object | React.CSSProperties
}

const ButtonBox = styled.button<ButtonProps>`
  border-radius: 10px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fcfcfc"};
  padding: 10px 20px;
  border: 1px solid #eb4559;
  color: ${(props) =>
    props.backgroundColor ? "#fcfcfc" : props.backgroundColor};
  outline: none;
  cursor: pointer;
`

function Button({ title, backgroundColor, style, onClick }: ButtonProps) {
  return (
    <ButtonBox onClick={onClick} backgroundColor={backgroundColor}>
      {title}
    </ButtonBox>
  )
}

export default Button
