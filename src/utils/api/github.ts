import axios from "axios"
import { GithubInfo } from "../../store/types/dto"

export async function getUserInfo(username: string) {
  const res = await axios.get<GithubInfo>(
    `https://api.github.com/users/${username}`
  )
  console.log({ res })
  return res.data
}
