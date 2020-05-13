import { all } from "redux-saga/effects";
import testSaga from "./github/sagas/testSaga";
import { githubSaga } from "../store/github/sagas/githubSaga";

export default function* rootSaga() {
  yield all([githubSaga()]);
}
