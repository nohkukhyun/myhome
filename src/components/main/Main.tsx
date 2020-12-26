import React from "react";
import styled from "styled-components";
import Parallax from "../common/ui/Parallax";

const MainWrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 172px);
`;

function Main() {
  return (
    <MainWrap>
      <Parallax title={"WELCOME :)"} />
    </MainWrap>
  );
}

export default Main;
