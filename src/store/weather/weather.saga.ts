import {
  getWeather,
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from "./weather.actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { getWeatherApi } from "./weather.api";
import { weatherTypes } from "../types/weather.types";

function* getWeatherSaga(actions: any) {
  try {
    const weatherInfo: weatherTypes = yield call(getWeatherApi);
    yield put({ type: GET_WEATHER_SUCCESS, weatherInfo });
  } catch (error) {
    yield put({ type: GET_WEATHER_FAILURE, error });
  }
}

export function* weatherSaga() {
  yield takeEvery(GET_WEATHER, getWeatherSaga);
}
