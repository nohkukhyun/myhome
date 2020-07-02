// import { delay } from "redux-saga"
import { call, put, takeEvery, delay } from "redux-saga/effects"
import { TOAST_SHOW, TOAST_RESET } from "./toast.action"

function* toastShow(action: {} | any) {
  try {
    console.log({ action })
    const rs = action.payload
    yield put({ type: TOAST_SHOW, rs })
    yield call(delay, 3000)
    // yield put({ type: TOAST_RESET })
  } catch (error) {
    console.log({ error })
  }
}

function* toastReset() {
  yield put({ type: TOAST_RESET })
}

export function* toastSaga() {
  yield takeEvery(TOAST_SHOW, toastShow)
  // yield delay(3000)
  yield takeEvery(TOAST_RESET, toastReset)
}
