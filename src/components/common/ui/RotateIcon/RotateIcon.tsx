import React from "react";
import styled from "styled-components";

const RotateIconWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 2s linear infinite;
  @media (max-width: 500px) {
    left: 45%;
    top: 45%;
  }
`;

const Svg = styled.svg`
  fill: #fff;
  @keyframes rotate {
    0% {
      transform: rotate(360deg);
      width: 30px;
    }
    100% {
      transform: rotate(2160deg);
      width: 130px;
    }
  }
  @media (max-width: 500px) {
    @keyframes rotate {
      0% {
        transform: rotate(360deg);
        width: 20px;
      }
      100% {
        transform: rotate(2160deg);
        width: 80px;
      }
    }
  }
`;

type RotateIconProps = {
  icon?: string | HTMLElement;
};

function RotateIcon({ icon }: RotateIconProps) {
  return (
    <RotateIconWrap>
      <Icon>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-2h8v2zm-7.5-9c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.671-1.5-1.5.672-1.5 1.5-1.5zm0-2c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
        </Svg>
      </Icon>
    </RotateIconWrap>
  );
}

export default RotateIcon;
