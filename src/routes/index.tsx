import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GitUserInfoContainer from "../containers/gituserinfo/GitUserInfoContainer";
import Movie from "../containers/movie/Movie";
import CounterContainer from "../containers/counter";
import MainContainer from "../containers/main/MainContainer";
import Work from "../containers/work/WorkContainer";
import Sidebar from "../components/common/sidebar";
import Footer from "../components/common/footer";
import AboutContainer from "../containers/about";
import WeatherContainer from "../containers/weather";
import Toast from "../components/common/toast";
import stylepage from "../pages/stylepage";
import StylePage from "../components/stylepage";
import Memo from "../components/memo/Memo";

type historyProps = {
  history: History;
  handleShowModal: () => void;
  handleCloseModal: () => void;
};

const Root = ({ history, handleShowModal, handleCloseModal }: historyProps) => (
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
        <Route
          path="/git"
          component={GitUserInfoContainer}
          handleShowModal={handleShowModal}
          handleCloseModal={handleCloseModal}
        />
        <Route path="/movie" component={Movie} />
        <Route path="/count" component={CounterContainer} />
        <Route path="/work/:id" component={Work} history={history} />
        <Route
          path="/about"
          component={AboutContainer}
          history={history}
          handleShowModal={handleShowModal}
        />
        <Route path="/weather" component={WeatherContainer} history={history} />
        <Route path="/memo" component={Memo} />
        <Route path="/style" component={StylePage} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer
        handleShowModal={handleShowModal}
        handleCloseModal={handleCloseModal}
      />
      {/* <Toast toasts={[{ message: "test" }]} /> */}
    </BrowserRouter>
  </>
);

export default Root as any;
