import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Modal from "../../components/common/modal/Modal"

const modalElement: JSX.Element | any = document.getElementById("modal")
function ModalPortal(children: any) {
  const el = document.createElement("div")

  useEffect(() => {
    modalElement.appendChild(el)
  })

  useEffect(() => {
    modalElement.removeChild(el)
  }, [el])

  return createPortal(<Modal>{children}</Modal>, el)
}

export default ModalPortal
