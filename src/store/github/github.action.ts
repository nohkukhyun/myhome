import { GithubInfo } from "../types/gitdto";
import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";

export const GET_USER_INFO = `GET_USER_INFO`;
export const GET_USER_INFO_SUCCESS = `GET_USER_INFO_SUCCESS`;
export const GET_USER_INFO_FAILURE = `GET_USER_INFO_FAILURE`;

// export const getUserInfo = createStandardAction(GET_USER_INFO)();
// export const getUserInfoSuccess = createStandardAction(GET_USER_INFO_SUCCESS)<
//   GithubInfo
// >();
// export const getUserInfoFaulure = createStandardAction(GET_USER_INFO_FAILURE)<
//   AxiosError
// >();

export const getUserInfoAsync = createAsyncAction(
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE
)<string, GithubInfo, AxiosError>();
