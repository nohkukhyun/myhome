import React from "react";
import Parallax from "../common/ui/Parallax";
import styled from "styled-components";
import Button from "../common/ui/Button";
import Modal from "../common/modal";
import ModalPortal from "../../utils/modal/ModalPortal";

type AboutProps = {
  userInfo?: any;
  handleSubmitName: (name: string) => void;
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  names: string;
  open: boolean;
  handleModal: () => void;
};

const AboutWrap = styled.div`
  width: 100%;
  position: relative;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  outline: none;
  border: 1px solid #eb4559;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 10px;
`;

function About({
  userInfo,
  handleSubmitName,
  handleChangeName,
  names,
  open,
  handleModal,
}: AboutProps) {

  const ModalWrap = styled.div`
    border-radius: 5px;
    width: 500px;
    padding: 20px;
    text-align: center;
    background-color: #fff;
  `;

  return (
    <AboutWrap>
      <InputBox>
        <Input
          name={names}
          onChange={handleChangeName}
          placeholder="please your github name..."
        />
        {/* <Button onClick={() => handleSubmitName(names)}>Search</Button> */}
        <Button title={`Search`} onClick={() => handleSubmitName(names)} />
      </InputBox>
      <Parallax userInfo={userInfo} />
      {open ? (
        <ModalPortal onClick={() => handleModal()}>
          <Modal>
            <ModalWrap>모야</ModalWrap>
            <button onClick={() => handleModal()}>Close Modal</button>
          </Modal>
        </ModalPortal>
      ) : null}
    </AboutWrap>
  );
}

export default About;
