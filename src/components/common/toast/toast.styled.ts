import styled from "styled-components";

export const ToastWrap = styled.div`
  position: fixed;
`;

export const ToastWrapBody = styled.div<any>`
  position: absolute;
  top: 100px;
  right: -110%;
  width: auto;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ToastMessage = styled.p`
  font-size: 12px;
  color: #333;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #333;
`;
