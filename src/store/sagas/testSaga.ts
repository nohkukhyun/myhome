import { put, call, takeEvery, all, fork } from "redux-saga/effects";

export default function* testSaga() {
  console.log("test saga hello!");
}
