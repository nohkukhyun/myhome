import React from "react";
import { GithubInfo } from "../../../store/github/types/dto";

type UserInfoListProps = {
  name: string | null;
  bio: string | null;
};

function UserInfoList(info: UserInfoListProps) {
  return (
    <div>
      <ul>
        <li>{info.name}</li>
        <li>{info.bio}</li>
      </ul>
    </div>
  );
}

export default UserInfoList;
