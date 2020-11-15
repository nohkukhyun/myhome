import React,{useEffect, useState} from 'react'
import * as S from './stylepage.styled'

const StylePage = () => {

  function textSlideAnimation(){
    let infoTarget = document.querySelector('#info')
    let infoTarget2 = document.querySelector('#info_two')
    let windowHeight = window.innerHeight
    let scrollValue = window.scrollY
    let infoOffsetTop:any = infoTarget?.getBoundingClientRect()?.top
    let infoOffsetTop2 = infoTarget2?.getBoundingClientRect()?.top
    console.log("scroll value", windowHeight,scrollValue,infoOffsetTop,infoOffsetTop2)
    if(windowHeight > infoOffsetTop){
      infoTarget?.classList.add('active')
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", ((e) => {
      textSlideAnimation()
    }))
  },[])

  return (
    <S.StylePageWrap>
      <img width="100%" src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
      <S.StylePageSection id="info">
        <S.Title>Info</S.Title>
        <S.Division></S.Division>
        <S.InfoTable>
          <li>노국현</li>
          <li>010-6294-8910</li>
          <li>경기도 용인시 기흥구</li>
          <li>geekk89@gmail.com</li>
        </S.InfoTable>
      </S.StylePageSection>

      <S.StylePageSection id="info_two">
        <S.Title>Info</S.Title>
        <S.Division></S.Division>
        <S.InfoTable>
          <li>노국현</li>
          <li>010-6294-8910</li>
          <li>경기도 용인시 기흥구</li>
          <li>geekk89@gmail.com</li>
        </S.InfoTable>
      </S.StylePageSection>
    </S.StylePageWrap>
  )
}

export default StylePage
