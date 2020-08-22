import axios from "axios";
import { GithubInfo } from "../../store/types/gitdto";

export async function getUserInfo(username: string) {
  const res = await axios.get<GithubInfo>(
    `https://api.github.com/users/${username}`
  );
  return res.data;
}
