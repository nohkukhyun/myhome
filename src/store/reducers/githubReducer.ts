import { createReducer } from "typesafe-actions"
import { GithubProfile } from "../../utils/api/dto"
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
} from "../actions/github"

export type GithubState = {
  userProfile: {
    loading: boolean
    data: GithubProfile | null
    error: string
  }
}

const initialState: GithubState = {
  userProfile: {
    loading: false,
    data: null,
    error: "",
  },
}

// createReducer 리듀서를 쉽게 만들어주는 함수.
// Generics로 리듀서의 상태 및 처리 할 모든 액션 객체들의 타입을 넣어야한다.
// 배열
const githubReducer = createReducer<GithubState>(initialState, {})

export default githubReducer
