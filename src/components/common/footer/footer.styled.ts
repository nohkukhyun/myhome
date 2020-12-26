import styled from "styled-components";

export const FooterWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  align-items: center;
  bottom: 0;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #eb4559;
  a {
    color: #eb4559;
  }
  &:nth-child(1) {
    flex: 1;
    padding-left: 50px;
    text-align: left;
  }
  &:nth-child(2) {
    flex: 1;
  }
  &:nth-child(3) {
    flex: 1;
    padding-right: 50px;
    text-align: right;
  }
`;

export const Imog = styled.svg`
  fill: #eb4559;
  width: 30px;
  height: 30px;
`;
