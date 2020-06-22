import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Root from "./routes";
import Sidebar from "./components/common/sidebar";

//b421e26b5b47ab08ae124ce3cb3ef60eab14c37b  github api key
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
