import React from "react";
import Navbar from "./index";

export default { title: "Navbar", Component: "Navbar" };

const list = [
  {
    title: "홈",
    emoji: false,
  },
  {
    title: "투어&티켓",
    emoji: false,
  },
  {
    title: "항공권",
    emoji: false,
  },
  {
    title: "숙소",
    emoji: false,
  },
  {
    title: "국내골프",
    emoji: true,
  },
  {
    title: "패키지",
    emoji: false,
  },
  {
    title: "할인혜택",
    emoji: false,
  },
];

export const Navbars: React.FC = () => (
  <div>
    <Navbar list={list} />
  </div>
);
