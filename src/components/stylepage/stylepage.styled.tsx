import styled, { keyframes } from 'styled-components'

export const StylePageWrap = styled.div`
  position:relative;
  width:100%;
`

const fadeInUp = keyframes`
  0% {
    transform: translateY(30px);
    opacity:0;
  }
  100% {
    transform: translateY(0px);
    opacity:1
  }
`

export const StylePageSection = styled.div`
  position:relative;
  padding:50px;
  &.active {
    animation:${fadeInUp} 1s ease-in-out;
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