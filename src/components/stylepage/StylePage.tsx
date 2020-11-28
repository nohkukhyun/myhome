import React,{useEffect, useState} from 'react'
import * as S from './stylepage.styled'

const StylePage = () => {

  function textSlideAnimation(){
    let infoTarget = document.querySelectorAll('#info')
    let windowHeight = window.innerHeight
    let scrollValue = window.scrollY
    let absolutePos = windowHeight + scrollValue
    
    infoTarget.forEach((data,i) => {
      let infoOffsetTop:any = data?.getBoundingClientRect()?.top
      console.log("scroll value", windowHeight,infoOffsetTop,absolutePos)
      if(windowHeight >= infoOffsetTop + 100){
        data?.classList.add('active')
      }
    })
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

      <S.StylePageSection id="info">
        <S.Title>Language</S.Title>
        <S.Division></S.Division>
        <S.InfoTable>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
        </S.InfoTable>
      </S.StylePageSection>

      <S.StylePageSection id="info">
      <S.Title>Library</S.Title>
        <S.Division></S.Division>
        <S.InfoTable>
          <li>React</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>Styled-component</li>
        </S.InfoTable>
      </S.StylePageSection>


      <S.StylePageSection id="info">
        <S.Title>Blog</S.Title>
        <S.Division></S.Division>
        <S.InfoTable>
          <li>https://medium.com/geekk89</li>
          <li>http://www.crungeek.com</li>
        </S.InfoTable>
      </S.StylePageSection>
    </S.StylePageWrap>
  )
}

export default StylePage
