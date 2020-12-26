import { ActionType, createAction, createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";

export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export const GET_MOVIE_FAILURE = "GET_MOVIE_FAILURE";

export const getMovieAsyncAction = createAsyncAction(
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE
)<"", any, AxiosError>();

export const setMovieList = createAction("@movie/SET_MOVIE")<undefined>();

export const resetMovieList = createAction("@movie/RESET_MOVIE")<undefined>();

export const actions = {
  setMovieList,
  resetMovieList,
};

export type MovieActions = ActionType<typeof actions>;
