import * as actions from "../github/github.action";
import { ActionType } from "typesafe-actions";
import { GithubInfo } from "../types/gitdto";

export type GithubAction = ActionType<typeof actions>;
export type GithubState = {
  userInfo: {
    loading: Boolean;
    data: GithubInfo | null;
    error: Error | null;
  };
};
