import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const FooterWrap = styled.div`
  width: 100%;
  position: relative;
  height: 80px;
  line-height: 80px;
  display: flex;
  align-items: center;
`

const Title = styled.p`
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
`

const Imog = styled.svg`
  fill: #eb4559;
  width: 30px;
  height: 30px;
`

function Footer() {
  return (
    <FooterWrap>
      <Title>
        <Link to="/about">About</Link>
      </Title>
      <Title>
        <Imog
          className="imog"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-12c.331 1.465 2.827 4 6.001 4 3.134 0 5.666-2.521 5.999-4zm0-3.998l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002zm-7 0l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z" />
        </Imog>
      </Title>
      <Title>Contact</Title>
    </FooterWrap>
  )
}

export default Footer
