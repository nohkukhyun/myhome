import React from "react";
import styled from "styled-components";
import Parallax from "../common/ui/Parallax";

const MainWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function Main() {
  return (
    <MainWrap>
      <Parallax />
    </MainWrap>
  );
}

export default Main;
