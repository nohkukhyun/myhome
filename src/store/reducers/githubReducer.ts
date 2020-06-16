import { createReducer } from "typesafe-actions";
import { GithubAction, GithubState } from "../types/githubTypes";
import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
} from "../actions/githubAction";

const initialState: GithubState = {
  userInfo: {
    loading: false,
    data: null,
    error: null,
  },
};

// createReducer 리듀서를 쉽게 만들어주는 함수.
// Generics로 리듀서의 상태 및 처리 할 모든 액션 객체들의 타입을 넣어야한다.
const githubReducer = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_INFO]: (state) => ({
    ...state,
    userInfo: {
      loading: true,
      data: null,
      error: null,
    },
  }),

  [GET_USER_INFO_SUCCESS]: (state, action) => ({
    ...state,
    userInfo: {
      loading: false,
      data: action.payload,
      error: null,
    },
  }),

  [GET_USER_INFO_FAILURE]: (statet, action) => ({
    ...statet,
    userInfo: {
      loading: false,
      data: null,
      error: action.payload,
    },
  }),
});

export default githubReducer;
