import React from "react"
import styled from "styled-components"
import { GithubInfo } from "../../../store/github/types/dto"
import InputForm from "../InputForm/InputForm"

const GitUserFormWrap = styled.div`
  width: 100%;
  position: relative;
`

type GitUsernameProps = {
  info: GithubInfo | null
  handleSearch: (username: string) => void
}

function GitUsernameForm({ info, handleSearch }: GitUsernameProps) {
  return (
    <GitUserFormWrap>
      <InputForm handleSearch={handleSearch} />
    </GitUserFormWrap>
  )
}

export default GitUsernameForm
