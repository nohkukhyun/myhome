import * as actions from "../actions/githubAction"
import { ActionType } from "typesafe-actions"
import { GithubInfo } from "../../github/types/dto"

export type GithubAction = ActionType<typeof actions>
export type GithubState = {
  userInfo: {
    loading: Boolean
    data: GithubInfo | null
    error: Error | null
  }
}
