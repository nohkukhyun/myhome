import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/rootReducer";
import styled from "styled-components";

const DropAnimationWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 99999;
  left: 0;
  animation: Move 2s 0.1s ease-in-out;
  background-color: #eb4559;
  top: -100%;
  overflow-y: hidden;
  @keyframes Move {
    0% {
      top: -100%;
    }
    40%,
    70% {
      top: 0;
    }
    100% {
      top: 100%;
    }
  }
`;

function DropAnimation() {
  const { status } = useSelector((state: RootState) => state.slide);
  return status === true ? <DropAnimationWrap></DropAnimationWrap> : "";
}

export default DropAnimation as ReactElement | any;
