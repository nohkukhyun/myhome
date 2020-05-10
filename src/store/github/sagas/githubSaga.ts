import { getUserInfoAsync, GET_USER_INFO } from "../actions/githubAction";
import { getUserInfo } from "../../../utils/api/github";
import { GithubInfo } from "../../../utils/api/dto";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUserInfoSaga(action: any) {
  try {
    const userInfo: GithubInfo = yield call(getUserInfo, action.payload);
    console.log({ userInfo });
    yield put(getUserInfoAsync.success(userInfo));
  } catch (e) {
    yield put(getUserInfoAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_USER_INFO, getUserInfoSaga);
}
