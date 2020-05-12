import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import GitUserInfoContainer from "../containers/GitUserInfoContainer/GitUserInfoContainer";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/git" component={GitUserInfoContainer} />
      <Route path="/movie" />
      <Route path="/memo" />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
