import { getUserInfoAsync } from "./github.action";
import { getUserInfo } from "../../utils/api/github";
import { GithubInfo } from "../types/gitdto";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUserInfoSaga(action: any) {
  const { payload } = action;
  if (!payload) return;

  try {
    const userInfo: GithubInfo = yield call(getUserInfo, payload);
    yield put(getUserInfoAsync.success(userInfo));
  } catch (e) {
    yield put(getUserInfoAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(getUserInfoAsync.request, getUserInfoSaga);
}
