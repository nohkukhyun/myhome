import React, { useState, ChangeEvent } from "react"
import styled from "styled-components"

const InputWrap = styled.input`
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #f4f4f4;
`

const Button = styled.button`
  width: auto;
  padding: 5px;
  border: 1px solid #f4f4f4;
`

type InputFormProps = {
  handleSearch: (username: string) => void
}

function InputForm({ handleSearch }: InputFormProps) {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    if (!value) return
    handleSearch(value)
  }

  return (
    <>
      <InputWrap
        value={value}
        onChange={handleChange}
        placeholder="please github name.."
      />
      <Button onClick={handleClick}>click</Button>
    </>
  )
}

export default InputForm
