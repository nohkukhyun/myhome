import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as S from "./toast.styled";

interface ToastProps {
  toast?: {} | any;
}

function Toast({ toast }: ToastProps) {
  console.log({ toast });
  const [show, setShow] = useState(false);
  const { message } = toast;
  useEffect(() => {
    if (Object.keys(message).length > 0) setShow(true);
  }, [message, toast]);

  return (
    <S.ToastWrap>
      <S.ToastWrapBody className={show && "show"}>
        <S.Icon></S.Icon>
        <S.ToastMessage>{toast?.message}</S.ToastMessage>
      </S.ToastWrapBody>
    </S.ToastWrap>
  );
}

export default Toast;
