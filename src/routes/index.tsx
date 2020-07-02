import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import GitUserInfoContainer from "../containers/gituserinfo/GitUserInfoContainer"
import Movie from "../containers/movie/Movie"
import CounterContainer from "../containers/counter"
import MainContainer from "../containers/main/MainContainer"
import Work from "../containers/work/WorkContainer"
import Sidebar from "../components/common/sidebar"
import Footer from "../components/common/footer"
import AboutContainer from "../containers/about"
import WeatherContainer from "../containers/weather"
import Toast from "../components/common/toast"

type historyProps = {
  history: History
  toast?: {} | any
}

const Root = ({ history, toast }: historyProps) => (
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
        <Route path="/about" component={AboutContainer} history={history} />
        <Route path="/weather" component={WeatherContainer} history={history} />
        <Route path="/memo" />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
      <Toast toast={toast} />
    </BrowserRouter>
  </>
)

export default Root as any
