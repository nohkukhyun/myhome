import { all } from "redux-saga/effects";
import { githubSaga } from "../store/github/sagas/githubSaga";
import { movieSaga } from "../store/movie/sagas/movie.saga";

export default function* rootSaga() {
  yield all([githubSaga(), movieSaga()]);
}
