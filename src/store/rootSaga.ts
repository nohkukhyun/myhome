import { all } from "redux-saga/effects";
import { githubSaga } from "./github/github.saga";
import { movieSaga } from "./movie/movie.saga";
import { weatherSaga } from "./weather/weather.saga";

export default function* rootSaga() {
  yield all([githubSaga(), movieSaga(), weatherSaga()]);
}
