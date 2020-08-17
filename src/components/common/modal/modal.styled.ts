import styled from "styled-components";

export const ModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: #333;
  /* background-color: rgba(255, 255, 255, 0.8); */
  opacity: 0.9;
  z-index: 999999;
`;

export const ModalWrapBody = styled.div`
  min-width: 300px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
