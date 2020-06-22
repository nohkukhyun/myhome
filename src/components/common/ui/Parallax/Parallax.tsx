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
  top: calc(50% - 150px);
  width: 100%;
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

function Parallax() {
  const parallax = (e: MouseEvent) => {
    const ele: HTMLElement | any = document.querySelectorAll(".layer");

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

  return (
    <ParallaxWrap>
      <TextWrap>
        <Text className="layer">WELCOME :)</Text>
        <Text className="layer line">WELCOME :)</Text>
      </TextWrap>
    </ParallaxWrap>
  );
}

export default Parallax;
