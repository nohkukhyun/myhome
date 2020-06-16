import { getMovieAsyncAction, GET_MOVIE } from "../actions/movieAction";
import { movieApi } from "../../../utils/api/movie";
import { movieDto } from "../types";
import { call, put, takeEvery } from "redux-saga/effects";

function* getMovieSaga(action: any) {
  try {
    //api call
    const movieLists: movieDto = yield call(movieApi);
    console.log({ movieLists });
    //store저장
    yield put(getMovieAsyncAction.success(movieLists));
  } catch (error) {
    yield put(getMovieAsyncAction.failure(error));
  }
}

export function* movieSaga() {
  yield takeEvery(GET_MOVIE, getMovieSaga);
}
