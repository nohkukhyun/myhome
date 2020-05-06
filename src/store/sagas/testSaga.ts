import { put, call, takeEvery, all, fork } from "redux-saga/effects"

function* testSaga() {
  return console.log("test saga hello!")
}

export default testSaga
