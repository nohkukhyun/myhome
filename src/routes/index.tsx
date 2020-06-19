import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import GitUserInfoContainer from "../containers/gituserinfo/GitUserInfoContainer"
import Main from "../containers/main/Main"
import Movie from "../containers/movie/Movie"
import Counter from "../components/counter"

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Main} />
      <Route path="/git" component={GitUserInfoContainer} />
      <Route path="/movie" component={Movie} />
      <Route path="/count" component={Counter} />
      <Route path="/memo" />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default Root
