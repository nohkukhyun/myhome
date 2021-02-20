import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MainCenterWrap = styled.div`
  width: 55%;
  /* height: 650px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: url("https://images.unsplash.com/photo-1592746455916-7ac99236b6d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"); */
  /* background-size: 100%; */
  @media (max-width: 500px) {
    width: 100%;
    height: 75%;
  }
`;

const NextWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 650px;
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='100' height='100'%0AviewBox='0 0 172 172'%0Astyle=' fill:%23000000;'%3E%3Cg fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' width='12px' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'%3E%3Cpath d='M0,172v-172h172v172z' fill='none'%3E%3C/path%3E%3Cg%3E%3Cpath d='M106.64,73.96l-22.36,-22.36l15.48,-15.48l37.84,37.84l12.04,12.04l-12.04,12.04l-37.84,37.84l-15.48,-15.48l22.36,-22.36h-84.28v-1.72v-1.72v-17.2v-1.72v-1.72z' fill='%23eb4559'%3E%3C/path%3E%3Cpath d='M99.76,137.6c-0.44032,0 -0.88064,-0.16856 -1.21604,-0.50396l-15.48,-15.48c-0.67252,-0.67252 -0.67252,-1.75956 0,-2.43208l19.42396,-19.42396h-80.12792c-0.94944,0 -1.72,-0.77056 -1.72,-1.72v-24.08c0,-0.94944 0.77056,-1.72 1.72,-1.72h80.12792l-19.42396,-19.42396c-0.67252,-0.67252 -0.67252,-1.75956 0,-2.43208l15.48,-15.48c0.67252,-0.67252 1.75956,-0.67252 2.43208,0l49.88,49.88c0.67252,0.67252 0.67252,1.75956 0,2.43208l-49.88,49.88c-0.3354,0.3354 -0.77572,0.50396 -1.21604,0.50396zM86.71208,120.4l13.04792,13.04792l47.44792,-47.44792l-47.44792,-47.44792l-13.04792,13.04792l21.14396,21.14396c0.49192,0.49192 0.63984,1.23152 0.37324,1.8748c-0.2666,0.64156 -0.8944,1.06124 -1.58928,1.06124h-82.56v20.64h82.56c0.69488,0 1.32268,0.41968 1.58928,1.06124c0.2666,0.64328 0.11868,1.38288 -0.37324,1.8748z' fill='%231f212b'%3E%3C/path%3E%3Cpath d='M118.68,67.08c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112l-18.06,-18.06c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604c0.3354,-0.3354 0.88064,-0.3354 1.21604,0l18.06,18.06c0.3354,0.3354 0.3354,0.88064 0,1.21604c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112zM131.58,79.98c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112l-4.3,-4.3c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604c0.3354,-0.3354 0.88064,-0.3354 1.21604,0l4.3,4.3c0.3354,0.3354 0.3354,0.88064 0,1.21604c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112zM100.62,124.7c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604l30.1,-30.1c0.3354,-0.3354 0.88064,-0.3354 1.21604,0c0.3354,0.3354 0.3354,0.88064 0,1.21604l-30.1,30.1c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112zM138.46,86.86c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112l-2.58,-2.58c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604c0.3354,-0.3354 0.88064,-0.3354 1.21604,0l2.58,2.58c0.3354,0.3354 0.3354,0.88064 0,1.21604c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112z' fill='%231f212b'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    pointer;
  @media (max-width: 500px) {
    height: 350px;
  }
`;

const PrevWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 650px;
  transform: rotate(180deg);
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='100' height='100'%0AviewBox='0 0 172 172'%0Astyle=' fill:%23000000;'%3E%3Cg fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'%3E%3Cpath d='M0,172v-172h172v172z' fill='none'%3E%3C/path%3E%3Cg%3E%3Cpath d='M65.36,73.96l22.36,-22.36l-15.48,-15.48l-37.84,37.84l-12.04,12.04l12.04,12.04l37.84,37.84l15.48,-15.48l-22.36,-22.36h84.28v-1.72v-1.72v-17.2v-1.72v-1.72z' fill='%23eb4559'%3E%3C/path%3E%3Cpath d='M72.24,137.6c-0.44032,0 -0.88064,-0.16856 -1.21604,-0.50396l-49.88,-49.88c-0.67252,-0.67252 -0.67252,-1.75956 0,-2.43208l49.88,-49.88c0.67252,-0.67252 1.75956,-0.67252 2.43208,0l15.48,15.48c0.67252,0.67252 0.67252,1.75956 0,2.43208l-19.42396,19.42396h80.12792c0.94944,0 1.72,0.77056 1.72,1.72v24.08c0,0.94944 -0.77056,1.72 -1.72,1.72h-80.12792l19.42396,19.42396c0.67252,0.67252 0.67252,1.75956 0,2.43208l-15.48,15.48c-0.3354,0.3354 -0.77572,0.50396 -1.21604,0.50396zM24.79208,86l47.44792,47.44792l13.04792,-13.04792l-21.14396,-21.14396c-0.49192,-0.49192 -0.63984,-1.23152 -0.37324,-1.8748c0.2666,-0.64156 0.8944,-1.06124 1.58928,-1.06124h82.56v-20.64h-82.56c-0.69488,0 -1.32268,-0.41968 -1.58928,-1.06124c-0.2666,-0.64328 -0.11868,-1.38288 0.37324,-1.8748l21.14396,-21.14396l-13.04792,-13.04792z' fill='%231f212b'%3E%3C/path%3E%3Cpath d='M53.32,67.08c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604l18.06,-18.06c0.3354,-0.3354 0.88064,-0.3354 1.21604,0c0.3354,0.3354 0.3354,0.88064 0,1.21604l-18.06,18.06c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112zM40.42,79.98c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604l4.3,-4.3c0.3354,-0.3354 0.88064,-0.3354 1.21604,0c0.3354,0.3354 0.3354,0.88064 0,1.21604l-4.3,4.3c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112zM71.38,124.7c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112l-30.1,-30.1c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604c0.3354,-0.3354 0.88064,-0.3354 1.21604,0l30.1,30.1c0.3354,0.3354 0.3354,0.88064 0,1.21604c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112zM33.54,86.86c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604l2.58,-2.58c0.3354,-0.3354 0.88064,-0.3354 1.21604,0c0.3354,0.3354 0.3354,0.88064 0,1.21604l-2.58,2.58c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112z' fill='%231f212b'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    pointer;
  @media (max-width: 500px) {
    height: 350px;
  }
`;

const DescriptionWrap = styled.div`
  position: relative;
  z-index: 1000;
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 500px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  color: #eb4559;
  z-index: 10;
`;
const Description = styled.p`
  width: auto;
  color: #eb4559;
  font-size: 15px;
  z-index: 10;
  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  img {
    max-width: 100%;
    /* background-size: 100%; */
  }
  @media (max-width: 500px) {
    top: 50%;
    transform: translateY(-90%);
    img {
      width: 90%;
    }
  }
`;

type MainCetnerProps = {
  history: History | any;
};

function MainCenter({ history }: MainCetnerProps) {
  const [show, setShow] = useState(false);

  const handleNext = (data: any) => {
    if (projectList.length - 1 === data.id) return false;
    history.push(`/work/${data.id + 1}`);
  };

  const handlePrev = (data: any) => {
    if (data.id === 0) return false;
    history.push(`/work/${data.id - 1}`);
  };

  useEffect(() => {
    const bg: Element | any = document.querySelector("#onlyBg");
    bg?.addEventListener("mousemove", (e: Event | any) => {
      bg.style.backgroundPositionX = -e.offsetX + "px";
      bg.style.backgroundPositionY = -e.offsetY + "px";
    });
  }, []);
  const { location } = history;

  const projectList = [
    {
      id: 0,
      title: "Kakaopay - 스마트폰샵(KT)",
      description: `Position: front-end 100% / Tech: React.js, Redux, Redux-Saga,
      SCSS, styled-components`,
      url: "/work/0",
      image: "/images/kakaopay.png",
    },
    {
      id: 1,
      title: "Drmuzy",
      description: `Position: front-end 100% / Tech: React.js, Redux, Redux-Saga,
      SCSS, styled-components`,
      url: "/work/1",
      image: "/images/drmuzy.png",
    },
    {
      id: 2,
      title: "WashZone",
      description: `Position: front-end / 100% / Tech: Vue.js, VueX SCSS, javascript,
      HTML, php`,
      url: "/work/2",
      image: "/images/washzone.png",
    },
    {
      id: 3,
      title: "SangJa",
      description: `Position: front-end / 100% / Tech: jQuery, SCSS, javascript, HTML,
      php`,
      url: "/work/3",
      image: "/images/sangja.png",
    },
    {
      id: 4,
      title: "중소벤처기업 ",
      description: `Position: front-end / 100% / Tech: jQuery, css, javascript, HTML,
      php`,
      url: "/work/4",
      image: "/images/joongso.png",
    },
    {
      id: 5,
      title: "인천상공회의소",
      description: `Position: front-end / 100% / Tech: jQuery, SCSS, javascript, HTML,
      php`,
      url: "/work/5",
      image: "/images/ico.png",
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
        // eslint-disable-next-line array-callback-return
        projectList.map((data, i) => {
          if (location.pathname === data.url) {
            return (
              <>
                <DescriptionWrap key={`projdct-${i}`}>
                  <Title>{data.title}</Title>
                  <Description>{data.description}</Description>
                </DescriptionWrap>
                <ImageWrap>
                  <img src={data.image} alt={"img"} />
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
