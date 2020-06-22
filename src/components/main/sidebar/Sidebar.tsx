import React from "react";
import styled from "styled-components";

const SidebarWrap = styled.div`
  width: 100%;
  background-color: #dae1e7;
  position: relative;
  z-index: 11;
`;

const SidebarWrapContents = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

const SidebarWrapLogo = styled.div`
  font-weight: bold;
  color: #eb4559;
  font-size: 1.2rem;
`;

const SidebarWrapWork = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #eb4559;
`;

function Sidebar() {
  return (
    <SidebarWrap>
      <SidebarWrapContents>
        <SidebarWrapLogo>N</SidebarWrapLogo>
        <SidebarWrapWork>Work</SidebarWrapWork>
      </SidebarWrapContents>
    </SidebarWrap>
  );
}

export default Sidebar;
