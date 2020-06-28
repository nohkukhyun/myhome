import {
  getWeather,
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from "../weather/weather.actions";
import { weatherTypes } from "../types/weather.types";

export type weatherState = {
  weatherInfo: {
    data: weatherTypes | null;
    error: string | null;
  };
};

const initialState: weatherState = {
  weatherInfo: {
    data: null,
    error: null,
  },
};

export type weatherActions = ReturnType<typeof getWeather>;

function weather(state: weatherState = initialState, action: weatherActions) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weatherInfo: null,
        error: null,
      };

    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weatherInfo: state.weatherInfo.data,
        error: null,
      };

    case GET_WEATHER_FAILURE:
      return {
        ...state,
        weatherInfo: null,
        error: state.weatherInfo.error,
      };

    default:
      return state;
  }
}

export default weather;
