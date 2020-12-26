import React, { ReactChild, ReactFragment } from "react";
import styled from "styled-components";

const LayoutWrapbody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: hidden;
  height: calc(100vh - 172px);
`;

type LayoutProps = {
  children?: React.ReactNode | ReactChild | ReactFragment;
};

function Layout({ children }: LayoutProps) {
  return <LayoutWrapbody>{children}</LayoutWrapbody>;
}

export default Layout;
