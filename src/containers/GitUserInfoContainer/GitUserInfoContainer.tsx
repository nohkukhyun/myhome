import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getUserInfoAsync } from "../../store/github/actions/githubAction";
import GitUsernameForm from "../../components/GitUsernameForm./GitUsernameForm";

function GitUserInfoContainer() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.github.userInfo
  );

  const handleSearchName = (username: string) => {
    console.log({ username });
    dispatch(getUserInfoAsync.request(username));
  };

  console.log({ loading, data, error });

  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>error</p>}
      <GitUsernameForm info={data} handleSearch={handleSearchName} />
    </>
  );
}

export default GitUserInfoContainer;
