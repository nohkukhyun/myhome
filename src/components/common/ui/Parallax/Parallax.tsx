import React, { useEffect } from "react";
import styled from "styled-components";

const ParallaxWrap = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Text = styled.h2`
  position: absolute;
  font-size: 8em;
  text-align: center;
  top: ${(props: ParallaxProps) =>
    props?.userInfo?.data?.name ? "calc(50% - 250px)" : "calc(50% - 150px)"};
  width: 100%;
  &.small {
    font-size: 3rem;
    font-weight: normal;
  }
  @media (max-width: 414px) {
    font-size: 3.6em;
  }
`;

const InfoText = styled.p`
  font-size: 2.5rem;
  color: #eb4559;
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 4px #eb4559;
    text-stroke: 4px #eb4559;
  }
  @media (max-width: 414px) {
    h2:nth-child(1) {
      color: transparent;
      -webkit-text-stroke: 2px #eb4559;
    }
  }
  h2:nth-child(2) {
    color: #eb4559;
    animation: wave 3s ease-in-out infinite;
  }
  @keyframes wave {
    0%,
    100% {
      clip-path: polygon(
        0 56%,
        11% 44%,
        24% 39%,
        38% 43%,
        49% 53%,
        63% 58%,
        76% 56%,
        88% 51%,
        100% 43%,
        100% 100%,
        0% 100%
      );
      -webkit-clip-path: polygon(
        0 56%,
        11% 44%,
        24% 39%,
        38% 43%,
        49% 53%,
        63% 58%,
        76% 56%,
        88% 51%,
        100% 43%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0 49%,
        11% 58%,
        24% 61%,
        37% 61%,
        54% 53%,
        65% 46%,
        79% 40%,
        91% 45%,
        100% 51%,
        100% 100%,
        0% 100%
      );
      -webkit-clip-path: polygon(
        0 49%,
        11% 58%,
        24% 61%,
        37% 61%,
        54% 53%,
        65% 46%,
        79% 40%,
        91% 45%,
        100% 51%,
        100% 100%,
        0% 100%
      );
    }
  }
`;

type ParallaxProps = {
  title?: string;
  userInfo?: object | any;
};

function Parallax({ title, userInfo }: ParallaxProps) {
  const parallax = (e: MouseEvent) => {
    const ele: NodeList = document.querySelectorAll(".layer");

    if (ele) {
      ele.forEach((data: any) => {
        let x = (window.innerWidth - e.pageX * 10) / 100;
        let y = (window.innerHeight - e.pageY * 10) / 100;
        data.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
  });

  const info = () => {
    if (userInfo?.data?.name !== "") {
      let text = userInfo?.data?.bio?.replace(/\n/g, "<br/>");
      return (
        <>
          <Text className="layer small">
            <InfoText dangerouslySetInnerHTML={{ __html: text }} />
          </Text>
        </>
      );
    }
  };

  const emptyInfo = () => {
    if (userInfo?.error?.name === "Error") {
      return (
        <>
          <Text className="layer small">
            <InfoText>
              Github의 등록되어있는 이름이 아닙니다.{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#eb4559"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-2h8v2zm-.499-6.296l-1.298 1.296-1.203-1.204 1.298-1.296-1.298-1.296 1.203-1.204 1.298 1.296 1.296-1.296 1.203 1.204-1.297 1.296 1.297 1.296-1.202 1.204-1.297-1.296zm-7 0l-1.298 1.296-1.203-1.204 1.298-1.296-1.298-1.296 1.203-1.204 1.298 1.296 1.296-1.296 1.203 1.204-1.297 1.296 1.297 1.296-1.202 1.204-1.297-1.296z" />
              </svg>{" "}
            </InfoText>
          </Text>
        </>
      );
    }
  };

  const userInfos = info();
  const errorInfos = emptyInfo();

  return (
    <ParallaxWrap>
      <TextWrap>
        <Text className="layer">{title}</Text>
        <Text className="layer line">{title}</Text>
        {userInfo?.data !== null ? userInfos : errorInfos}
      </TextWrap>
    </ParallaxWrap>
  );
}

export default Parallax;
