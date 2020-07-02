import styled from "styled-components"

export const ToastWrap = styled.div`
  position: fixed;
  width: 100%;
`

export const ToastWrapBody = styled.div<any>`
  position: absolute;
  top: 100px;
  right: -110%;
  width: auto;
  padding: 10px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  &.show {
    animation-name: move;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }

  @keyframes move {
    0% {
      right: -100%;
    }
    20% {
      right: 20px;
    }
    90% {
      right: 20px;
      /* opacity: 1; */
    }
    100% {
      right: -100%;
      /* opacity: 0; */
    }
  }
`

export const ToastMessage = styled.p`
  font-size: 12px;
  color: #333;
`

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #333;
`
