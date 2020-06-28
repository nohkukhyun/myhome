import React, { useState } from "react";
import styled from "styled-components";

export type NavbarProps = {
  list?: [] | any;
  badge?: boolean;
};

export type NavbarItemProps = {
  title: string;
  badge: boolean | string;
};

const NavbarWrap = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
`;

const NavbarItem = styled.li`
  width: auto;
  color: #999;
  padding: 10px;
  position: relative;
  &.active {
    color: #333;
    &::after {
      content: "";
      position: absolute;
      width: calc(100% - 20px);
      height: 3px;
      background-color: #0779e4;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 1;
      animation: fadeIn 0.3s linear;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: #db3056;
  font-size: 8px;
  color: #fff;
  text-align: center;
  span {
    display: block;
    margin-top: 1px;
  }
`;

function Navbar({ list }: NavbarProps) {
  const [index, setIndex]: any = useState(0);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <NavbarWrap>
      {list?.map((data: NavbarItemProps, i: number) => {
        return (
          <NavbarItem
            key={i}
            className={`${index === i ? "active" : ""}`}
            onClick={() => handleClick(i)}
          >
            {data?.badge && (
              <Badge>
                <span>N</span>
              </Badge>
            )}
            {data?.title}
          </NavbarItem>
        );
      })}
    </NavbarWrap>
  );
}

export default Navbar;
