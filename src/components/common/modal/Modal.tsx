import React from "react";
import * as S from "./modal.styled";

type ModalPros = {
  children: React.ReactNode;
};

function Modal({ children }: ModalPros) {
  return (
    <S.ModalWrap>
      <S.ModalWrapBody>{children}</S.ModalWrapBody>
    </S.ModalWrap>
  );
}

export default Modal;
