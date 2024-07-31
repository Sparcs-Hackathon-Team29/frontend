import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const SixContainer = styled.div`
  display: block;
  position: absolute;
  top: 3570px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const SixTitle = styled.div`
  color: #1b1b1b;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const SixSubTitle = styled.div`
  color: rgba(40, 40, 40, 0.5);
  font-size: 32px;
  font-weight: 500;
`;

const SixBotTitle = styled.div`
  color: rgba(40, 40, 40, 0.5);
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
`;

const InputForm = styled.input`
  border: 1.5px solid rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.hasInput ? "#000" : "#fbfbfb")};
  color: ${(props) => (props.hasInput ? "#fff" : "#000")};
  border-radius: 50px;
  width: 852px;
  height: 60px;
  margin-top: 50px;
  padding-left: 120px;
  font-size: 20px;

  &::placeholder {
    color: #808080;
  }

  &:active {
    outline: none;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 218px;
  left: 500px;
  height: 24px;
  width: 24px;
  background-color: #ccc;
  color: ${(props) => (props.hasInput ? "#20FB7C" : "#000000")};
`;

function SixBox({ setSixthfeedback }) {
  const [hasInput, setHasInput] = useState(false);

  const handleInputChange = (e) => {
    setHasInput(e.target.value !== "");
    setSixthfeedback(e.target.value);
  };

  return (
    <SixContainer>
      <SixTitle>가고 싶은 지역이 어디신가요?</SixTitle>
      <SixSubTitle>원하시는 지하철역이나 주소를 입력해주세요</SixSubTitle>
      <SixBotTitle>
        현재 계신 위치에 따라 실제 이동 거리는 바뀔 수 있어요
      </SixBotTitle>
      <Icon hasInput={hasInput} />
      <InputForm
        placeholder="가고 싶은 곳의 역, 주변 명소의 이름을 적어 주세요. ex 혜화역, 롯데타워"
        onChange={handleInputChange}
        hasInput={hasInput}
      />
    </SixContainer>
  );
}

export default SixBox;
