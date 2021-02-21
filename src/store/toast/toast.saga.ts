// import { delay } from "redux-saga"
import { put, takeEvery, delay } from "redux-saga/effects";
import { TOAST_SHOW, TOAST_RESET } from "./toast.action";

export interface toastShowAction {
  type: typeof TOAST_SHOW;
  payload: string;
}

//토스트 아이디
let _id = 0;

function* toastShow$(action: toastShowAction) {
  const nextId: number = _id + 1;
  _id = nextId;

  const message: string = action.payload;

  yield put({ type: TOAST_SHOW, payload: { id: nextId, message } });

  yield delay(3000);

  yield put({ type: TOAST_RESET, payload: nextId });
}

export function* toastSaga() {
  yield takeEvery(TOAST_SHOW, toastShow$);
  // yield delay(3000)
  // yield takeEvery(TOAST_RESET, toastReset);
}
