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

function MainContents() {
  return (
    <MainContentsWrapBody>
      <MainCenter />
    </MainContentsWrapBody>
  );
}

export default MainContents;
