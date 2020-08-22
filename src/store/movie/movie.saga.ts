import { getMovieAsyncAction, GET_MOVIE } from "./movie.action";
import { movieApi } from "../../utils/api/movie";
import { movieDto } from "../types/movieTypes";
import { call, put, takeEvery } from "redux-saga/effects";

function* getMovieSaga(action: any) {
  try {
    //api call
    const movieLists: movieDto = yield call(movieApi);
    //store저장
    yield put(getMovieAsyncAction.success(movieLists));
  } catch (error) {
    yield put(getMovieAsyncAction.failure(error));
  }
}

export function* movieSaga() {
  yield takeEvery(GET_MOVIE, getMovieSaga);
}
