import React from "react"
import Parallax from "../common/ui/Parallax"
import styled from "styled-components"
import Button from "../common/ui/Button"

type AboutProps = {
  userInfo?: object | any
  handleSubmitName: (name: string) => void
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  names: string
}

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  padding: 10px;
  width: 300px;
  outline: none;
  border: 1px solid #eb4559;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 10px;
`

function About({
  userInfo,
  handleSubmitName,
  handleChangeName,
  names,
}: AboutProps) {
  const btnStyle = {
    backgroundColor: "#eb4559",
  }
  return (
    <>
      <InputBox>
        <Input
          name={names}
          onChange={handleChangeName}
          placeholder="please your github name..."
        />
        {/* <Button onClick={() => handleSubmitName(names)}>Search</Button> */}
        <Button
          title={`Search`}
          backgroundColor={"#eb4559"}
          onClick={() => handleSubmitName(names)}
        />
      </InputBox>
      <Parallax userInfo={userInfo} />
    </>
  )
}

export default About
