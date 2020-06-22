import React from "react";
import "./App.css";
import Root from "./routes";
import { createGlobalStyle } from "styled-components";
import DropAnimation from "./components/common/ui/DropAnimation";
import Footer from "./components/common/footer";

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
  return (
    <div className="App">
      <GlobalStyle />
      <DropAnimation />
      <Root />
    </div>
  );
}

export default App;
