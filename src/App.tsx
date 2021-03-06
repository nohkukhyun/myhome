import React, { useState } from "react";
import "./App.css";
import Root from "./routes";
import { createGlobalStyle } from "styled-components";
import DropAnimation from "./components/common/ui/DropAnimation";
import ModalPortal from "./utils/modal/ModalPortal";
import Modal from "./components/common/modal/Modal";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
    overflow-x: hidden;
    background-color:#dae1e7;
    user-select: none;
  }
  h1,h2,h3,h4,h5,h6{
    margin:0;
  }
  ul,li{
    margin:0;
  }
  a{
    text-decoration:none;
    color:#333;
  }
`;

function App() {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <DropAnimation />
      <Root handleShowModal={handleShowModal} />
      {show ? (
        <ModalPortal>
          <Modal>afdasd</Modal>
        </ModalPortal>
      ) : null}
    </div>
  );
}

export default App;
