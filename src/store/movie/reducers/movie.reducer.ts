import { createReducer, ActionType } from "typesafe-actions";
import {
  GET_MOVIE,
  GET_MOVIE_FAILURE,
  GET_MOVIE_SUCCESS,
} from "../actions/movieAction";
import * as actions from "../actions/movieAction";
import { movieDto } from "../types";

export type MovieAction = ActionType<typeof actions>;
export type MovieTypes = {
  movie: {
    list: movieDto | null;
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
