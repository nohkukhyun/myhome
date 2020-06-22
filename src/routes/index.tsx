import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GitUserInfoContainer from "../containers/gituserinfo/GitUserInfoContainer";
import Movie from "../containers/movie/Movie";
import CounterContainer from "../containers/counter";
import MainContainer from "../containers/main/MainContainer";
import Work from "../containers/work/WorkContainer";
import Sidebar from "../components/common/sidebar";

type historyProps = {
  history: History;
};

const Root = ({ history }: historyProps) => (
  <>
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route
          path="/"
          exact={true}
          component={MainContainer}
          history={history}
        />
        <Route path="/git" component={GitUserInfoContainer} />
        <Route path="/movie" component={Movie} />
        <Route path="/count" component={CounterContainer} />
        <Route path="/work" component={Work} history={history} />
        <Route path="/memo" />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  </>
);

export default Root as any;
