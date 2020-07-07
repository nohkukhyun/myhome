import ReactDOM from "react-dom"
import Modal from "../../components/common/modal/Modal"

const ModalPortal = ({ children }: any) => {
  const el: JSX.Element | any = document.getElementById("modal")
  return ReactDOM.createPortal(Modal, el)
}

export default ModalPortal
