import { createReducer, ActionType } from "typesafe-actions";
import {
  GET_MOVIE,
  GET_MOVIE_FAILURE,
  GET_MOVIE_SUCCESS,
} from "./movie.action";
import * as actions from "./movie.action";
import { movieDto } from "../types/movieTypes";
export type MovieAction = ActionType<typeof actions>;
export type MovieTypes = {
  movie: {
    list: movieDto[] | null | any;
    loading: boolean;
    error: Error | null;
  };
};

const initialState: MovieTypes = {
  movie: {
    list: null,
    loading: false,
    error: null,
  },
};

const movies = createReducer<MovieTypes, MovieAction>(initialState, {
  [GET_MOVIE]: (state) => ({
    ...state,
    movie: {
      list: null,
      loading: true,
      error: null,
    },
  }),
  [GET_MOVIE_SUCCESS]: (state, action) => ({
    ...state,
    movie: {
      list: action.payload,
      loading: false,
      error: null,
    },
  }),
  [GET_MOVIE_FAILURE]: (state, action) => ({
    ...state,
    movie: {
      list: null,
      loading: true,
      error: action.payload,
    },
  }),
});

export default movies;
