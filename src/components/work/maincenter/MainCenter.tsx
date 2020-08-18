import React, { useState, useEffect } from "react";
import styled, { CSSObject } from "styled-components";
import Modal from "../../common/modal";

const MainCenterWrap = styled.div`
  width: 55%;
  height: 650px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: url("https://images.unsplash.com/photo-1592746455916-7ac99236b6d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"); */
  /* background-size: 100%; */
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const NextWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 650px;
  cursor: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTJsLTktOHY2aC0xNXY0aDE1djZ6Ii8+PC9zdmc+"),
    pointer;
  fill: #eb4559;
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
  fill: #eb4559;
`;

const DescriptionWrap = styled.div`
  position: relative;
  z-index: 1000;
  width: 100%;
  @media (max-width: 500px) {
    margin-top: 100px;
  }
`;

const Title = styled.h1`
  position: absolute;
  color: #eb4559;
  top: -30px;
  left: 30px;
  z-index: 10;
`;
const Description = styled.p`
  position: absolute;
  width: auto;
  color: #eb4559;
  top: 0px;
  font-size: 15px;
  left: 30px;
  z-index: 10;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
    background-size: 100%;
  }
  @media (max-width: 500px) {
    top: 50%;
    transform: translateY(-80%);
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

  const handleNext = (data: any) => {
    console.log({ data });
    if (data.id === 1) history.push("/work/2");
    else if (data.id === 2) history.push("/work/3");
    else if (data.id === 3) history.push("/work/4");
    else if (data.id === 4) history.push("/work/5");
    else if (data.id === 5) history.push("/work/5");
  };
  const handlePrev = (data: any) => {
    if (data.id === 1) history.push("/work/1");
    else if (data.id === 2) history.push("/work/1");
    else if (data.id === 3) history.push("/work/2");
    else if (data.id === 4) history.push("/work/3");
    else if (data.id === 5) history.push("/work/4");
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

  const projectList = [
    {
      id: 1,
      title: "Drmuzy",
      description: `Position: fonrt-end 100% / Tech: React.js, Redux, Redux-Observable,
      SCSS, styled-components`,
      url: "/work/1",
      image: "/images/dr.png",
    },
    {
      id: 2,
      title: "WashZone",
      description: `Position: fonrt-end / 100% / Tech: Vue.js, Axios, SCSS, javascript,
      HTML, php`,
      url: "/work/2",
      image: "/images/washzone.png",
    },
    {
      id: 3,
      title: "SangJa",
      description: `Position: fonrt-end / 100% / Tech: jQuery, SCSS, javascript, HTML,
      php`,
      url: "/work/3",
      image: "/images/sangja.png",
    },
    {
      id: 4,
      title: "중소벤처기업 ",
      description: `Position: fonrt-end / 100% / Tech: jQuery, css, javascript, HTML,
      php`,
      url: "/work/4",
      image: "/images/joongso.png",
    },
    {
      id: 5,
      title: "인천상공회의소",
      description: `Position: fonrt-end / 100% / Tech: jQuery, SCSS, javascript, HTML,
      php`,
      url: "/work/5",
      image: "/images/iico.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1500);
  });

  return (
    <MainCenterWrap id="onlyBg">
      {show &&
        projectList.map((data, i) => {
          if (location.pathname === data.url) {
            return (
              <>
                <DescriptionWrap>
                  <Title>{data.title}</Title>
                  <Description>{data.description}</Description>
                </DescriptionWrap>
                <ImageWrap>
                  <img src={data.image} />
                </ImageWrap>
                <PrevWrap onClick={() => handlePrev(data)} />
                <NextWrap onClick={() => handleNext(data)} />
              </>
            );
          }
        })}
    </MainCenterWrap>
  );
}

export default MainCenter;

const WorkContainer = () => {
  return <div></div>;
};
