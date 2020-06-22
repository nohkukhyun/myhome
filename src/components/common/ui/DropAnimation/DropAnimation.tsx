import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/rootReducer";
import styled from "styled-components";
import RotateIcon from "../RotateIcon";

const DropAnimationWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 99999;
  left: 0;
  animation: Move 2s linear;
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
  return status === true ? (
    <DropAnimationWrap>
      <RotateIcon
        icon={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-2h8v2zm-7.5-9c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.671-1.5-1.5.672-1.5 1.5-1.5zm0-2c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/></svg>`}
      />
    </DropAnimationWrap>
  ) : (
    ""
  );
}

export default DropAnimation as ReactElement | any;
