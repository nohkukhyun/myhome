import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as S from "./toast.styled";

export interface Toast {
  message?: string;
  index?: number;
}

interface ToastProps {
  toasts: Toast[];
}

function Toast({ toasts }: ToastProps) {
  const [show, setShow] = useState(false);
  // const { message } = toast;
  useEffect(() => {
    if (Object.keys(toasts).length > 0) setShow(true);
  }, [toasts]);

  return (
    <S.ToastWrap>
      <S.ToastWrapBody className={"show"}>
        <S.Icon></S.Icon>
        <S.ToastMessage>{toasts}</S.ToastMessage>
      </S.ToastWrapBody>
    </S.ToastWrap>
  );
}

export default Toast;
