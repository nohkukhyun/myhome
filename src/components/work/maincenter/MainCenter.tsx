import React, { useState, useEffect } from "react";
import styled, { CSSObject } from "styled-components";
import Modal from "../../common/modal";

const MainCenterWrap = styled.div`
  width: 75%;
  height: 650px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: url("https://images.unsplash.com/photo-1592746455916-7ac99236b6d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"); */
  /* background-size: 100%; */
`;

const NextWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 650px;
  cursor: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTJsLTktOHY2aC0xNXY0aDE1djZ6Ii8+PC9zdmc+"),
    pointer;
  z-index: 1;
`;

const PrevWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 650px;
  cursor: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAxMmw5LTh2NmgxNXY0aC0xNXY2eiIvPjwvc3ZnPg=="),
    pointer;
  z-index: 1;
`;

const Title = styled.h1`
  position: absolute;
  color: #eb4559;
  top: -150px;
  left: 30px;
  z-index: 10;
`;
const Description = styled.p`
  position: absolute;
  width: auto;
  color: #eb4559;
  top: -100px;
  font-size: 15px;
  left: 30px;
  z-index: 10;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 1024px;
  margin: 0 auto;
  img {
    width: 100%;
    background-size: 100%;
  }
`;

type MainCetnerProps = {
  history: History | any;
};

function MainCenter({ history }: MainCetnerProps) {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    console.log("dasdasd");
    setShow(true);
  };

  const handeMove = (num: number, type: string) => {
    const { location } = history;
    console.log({ num, type });
    if (location.pathname === "/work/1" && type === "next")
      history.push("/work/2");
    else if (location.pathname === "/work/1" && type === "prev")
      history.push("/work/1");
    else if (location.pathname === "/work/2" && type === "next")
      history.push("/work/3");
    else if (location.pathname === "/work/2" && type === "prev")
      history.push("/work/1");
    else if (location.pathname === "/work/3" && type === "next")
      history.push("/work/4");
    else if (location.pathname === "/work/3" && type === "prev")
      history.push("/work/2");
  };

  useEffect(() => {
    const bg: Element | any = document.querySelector("#onlyBg");
    bg?.addEventListener("mousemove", (e: Event | any) => {
      // console.log(bg.style.backgroundPositionX);
      bg.style.backgroundPositionX = -e.offsetX + "px";
      bg.style.backgroundPositionY = -e.offsetY + "px";
    });
  }, []);
  console.log(history);
  const { location } = history;

  return (
    <MainCenterWrap id="onlyBg">
      <PrevWrap onClick={() => handeMove(1, "prev")} />
      <NextWrap onClick={() => handeMove(1, "next")} />
      {location.pathname === "/work/1" ? (
        <>
          <Title>Drmuzy</Title>
          <Description>
            Position: fonrt-end 100% / Tech: React.js, Redux, Redux-Observable,
            SCSS, styled-components
          </Description>
          <ImageWrap>
            <img src="/images/wz-preview1.png" />
          </ImageWrap>
        </>
      ) : location.pathname === "/work/2" ? (
        <>
          <Title>WashZone</Title>
          <Description>
            Position: fonrt-end / 100% / Tech: Vue.js, Axios, SCSS, javascript,
            HTML, php
          </Description>
          <ImageWrap>
            <img src="/images/wz-preview1.png" />
          </ImageWrap>
        </>
      ) : location.pathname === "/work/3" ? (
        <>
          <Title>SangJa</Title>
          <Description>
            Position: fonrt-end / 100% / Tech: jQuery, SCSS, javascript, HTML,
            php
          </Description>
          <ImageWrap>
            <img src="/images/sj-preview2.png" />
          </ImageWrap>
        </>
      ) : (
        ""
      )}
    </MainCenterWrap>
  );
}

export default MainCenter;

const WorkContainer = () => {
  return <div></div>;
};
