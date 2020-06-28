import React from "react";
import Navbar from "./index";

export default { title: "Navbar", Component: "Navbar" };

const list = [
  {
    title: "홈",
    badge: false,
  },
  {
    title: "투어&티켓",
    badge: false,
  },
  {
    title: "항공권",
    badge: false,
  },
  {
    title: "숙소",
    badge: false,
  },
  {
    title: "국내골프",
    badge: true,
  },
  {
    title: "패키지",
    badge: false,
  },
  {
    title: "할인혜택",
    badge: false,
  },
];

export const Navbars: React.FC = () => (
  <div>
    <Navbar list={list} />
  </div>
);
