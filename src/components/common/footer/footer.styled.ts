import styled from "styled-components";

export const FooterWrap = styled.div`
  width: 100%;
  position: fixed;
  height: 80px;
  line-height: 80px;
  display: flex;
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
    padding-left: 20px;
    text-align: left;
  }
  &:nth-child(2) {
    flex: 1;
  }
  &:nth-child(3) {
    flex: 1;
    padding-right: 20px;
    text-align: right;
  }
`;

export const Imog = styled.svg`
  fill: #eb4559;
  width: 30px;
  height: 30px;
`;
