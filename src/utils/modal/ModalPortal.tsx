import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../../components/common/modal/Modal";

const modalElement: JSX.Element | any = document.getElementById("modal");
function ModalPortal(children: any) {
  const el = document.createElement("div");

  useEffect(() => {
    modalElement.appendChild(el);
  });

  useEffect(() => {
    modalElement.removeChild(el);
  }, [el]);

  const eleDom = () => {
    if (children.length > 0) {
      children.map((data: any, i: number) => {
        return <Modal>{data}</Modal>;
      });
    }
  };

  return createPortal(<Modal>children</Modal>, modalElement);
}

export default ModalPortal;
