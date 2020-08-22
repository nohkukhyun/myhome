import { getUserInfoAsync, GET_USER_INFO } from "./github.action";
import { getUserInfo } from "../../utils/api/github";
import { GithubInfo } from "../types/gitdto";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUserInfoSaga(action: any) {
  const { payload } = action;
  if (!payload) return;

  try {
    //api call
    const userInfo: GithubInfo = yield call(getUserInfo, payload);
    //store에 프로필 저장
    yield put(getUserInfoAsync.success(userInfo));
  } catch (e) {
    yield put(getUserInfoAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_USER_INFO, getUserInfoSaga);
}
