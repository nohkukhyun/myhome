import React from "react"
import * as S from "./modal.styled"

function Modal({ children }: any) {
  return (
    <S.ModalWrap>
      <S.ModalWrapBody>{children}</S.ModalWrapBody>
    </S.ModalWrap>
  )
}

export default Modal
