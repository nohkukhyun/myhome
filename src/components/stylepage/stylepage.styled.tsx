import styled, { keyframes } from 'styled-components'

export const StylePageWrap = styled.div`
  position:relative;
  width:100%;
`

const fadeInUp = keyframes`
  from {
    transform: translate3d(0,40px,0)
    opacity:0
  }
  to {
    transform:translate3d(0,0,0)
    opacity:1
  }
`

export const StylePageSection = styled.div`
  position:relative;
  padding:50px;
  .active {
    animation-name:${fadeInUp};
    animation-duration: 1s;
    animation-timing-function: linear
  }
`

export const Title = styled.div`
  font-size:3.5rem;
  color:#333;
  text-align:left;
  margin-bottom:20px;
`

export const Division = styled.div`
  height:1px;
  background-color:#999;
  width:100%;
`

export const TextSection = styled.div`
  font-size:1.5rem;
  color:#333;
  padding:10px 0;
`

export const InfoTable = styled.ul`
  list-style:none;
  padding:0;
  margin-top:30px;
  li{
    display:flex;
    justify-content:flex-start;
    padding:2.5px 0;
  }
`