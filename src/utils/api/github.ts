import axios from "axios"
import { GithubProfile } from "./dto"

export async function getUserProfile(username: string) {
  const res = await axios.get<GithubProfile>(
    `https://api.github.com/users/${username}`
  )
  return res.data
}
