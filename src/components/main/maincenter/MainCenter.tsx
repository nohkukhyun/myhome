import React, { useEffect } from "react";
import styled, { CSSObject } from "styled-components";

const MainCenterWrap = styled.div`
  width: 75%;
  height: 650px;
  background-color: #e5e5e5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("https://images.unsplash.com/photo-1592746455916-7ac99236b6d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80");
  background-size: 100%;
`;

const Title = styled.h1`
  position: absolute;
  color: #eb4559;
  top: 20px;
  left: 30px;
`;

const MainBlockWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: flex-start;
  left: 0;
  top: 0;
`;

const MainBlockLeft = styled.div`
  width: 50%;
  cursor: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAxMmw5LTh2NmgxNXY0aC0xNXY2eiIvPjwvc3ZnPg=="),
    pointer;
`;

const MainBlockRight = styled.div`
  width: 50%;
  cursor: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTJsLTktOHY2aC0xNXY0aDE1djZ6Ii8+PC9zdmc+"),
    pointer;
`;

function MainCenter() {
  useEffect(() => {
    const bg: Element | any = document.querySelector("#onlyBg");
    bg?.addEventListener("mousemove", (e: Event | any) => {
      bg.style.backgroundPositionX = -e.offsetX + "px";
      bg.style.backgroundPositionY = -e.offsetY + "px";
    });
  }, []);

  return (
    <MainCenterWrap id="onlyBg">
      <MainBlockWrap>
        <MainBlockLeft className="left" />
        <MainBlockRight className="right" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        ></svg>
      </MainBlockWrap>
      <Title>WashZone</Title>
    </MainCenterWrap>
  );
}

export default MainCenter;
