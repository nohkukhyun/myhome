import { GithubProfile } from "../../utils/api/dto"
import { createAsyncAction } from "typesafe-actions"
const _name = "@github"

export const GET_USER_PROFILE = `${_name}/GET_USER_PROFILE`
export const GET_USER_PROFILE_SUCCESS = `${_name}/GETUSER_PROFILE_SUCCESS`
export const GET_USER_PROFILE_FAILURE = `${_name}/GET_USER_PROFILE_FAILURE`

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
)<GithubProfile>()
