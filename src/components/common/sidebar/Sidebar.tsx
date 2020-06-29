import React from "react";
import { Link } from "react-router-dom";
import * as S from "./sidebar.styled";

function Sidebar() {
  return (
    <S.SidebarWrap>
      <S.SidebarWrapContents>
        <Link to="/">
          <S.SidebarWrapLogo>N</S.SidebarWrapLogo>
        </Link>
        <Link to="/work">
          <S.SidebarWrapWork>Work</S.SidebarWrapWork>
        </Link>
      </S.SidebarWrapContents>
    </S.SidebarWrap>
  );
}

export default Sidebar;
