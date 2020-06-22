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
  color: #eb4559;
  &.line {
    -webkit-text-stroke: 4px #eb4559;
    text-stroke: 4px #eb4559;
    color: #fff;
  }
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Parallax() {
  const parallax = (e: MouseEvent) => {
    const ele: HTMLElement | any = document.querySelector(".layer");

    if (ele) {
      let x = (window.innerWidth - e.pageX * 10) / 100;
      let y = (window.innerHeight - e.pageY * 10) / 100;
      ele.style.transform = `translate(${x}px, ${y}px)`;
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
