import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Root from "./routes";
import { createGlobalStyle } from "styled-components";
import DropAnimation from "./components/common/ui/DropAnimation";
import Toast from "./components/common/toast";
import { RootState } from "./store/rootReducer";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
    overflow: hidden;
    background-color: #dae1e7;
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
  const { popup } = useSelector((state: RootState) => state.toast);
  return (
    <div className="App">
      <GlobalStyle />
      <DropAnimation />
      <Toast toast={popup} />
      <Root />
    </div>
  );
}

export default App;
