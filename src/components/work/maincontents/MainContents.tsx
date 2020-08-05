import React from "react";
import styled from "styled-components";
import MainCenter from "../maincenter";

const MainContentsWrapBody = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dae1e7;
  margin-top: -66px;
  position: relative;
`;

type MainContents = {
  history: any | History;
};

function MainContents({ history }: MainContents) {
  return (
    <MainContentsWrapBody>
      <MainCenter history={history} />
    </MainContentsWrapBody>
  );
}

export default MainContents;
