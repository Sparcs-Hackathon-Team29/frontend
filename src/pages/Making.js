import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import FirstBox from "../components/making/FirstBox";
import SecondBox from "../components/making/SecondBox";
import ThirdBox from "../components/making/ThridBox";
import ForthBox from "../components/making/ForthBox";
import FifthBox from "../components/making/FifthBox";
import SixBox from "../components/making/SixthBox";
import SeventhBox from "../components/making/SeventhBox";
import EighthBox from "../components/making/EighthBox";
import NinthBox from "../components/making/NinthBox";
const Container = styled.div`
  display: block;
  height: 100vh;
  position: relative;
`;

const ScroleContainer = styled.div`
  display: block;
  position: absolute;
  top: 850px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;
const ScroleImg = styled.div`
  height: 24px;
  width: 24px;
  margin: 10px auto;
  background-color: #ccc;
`;
const ScroleText = styled.div`
  color: #1b1b1b;
  font-size: 24px;
  font-weight: 400;
`;

function Making() {
  const [firstfeedback, setFirstfeedback] = useState(null);
  const [secondfeedback, setSecondfeedback] = useState(null);
  const [thirdfeedback, setThirdfeedback] = useState(null);
  const [forthfeedback, setForthfeedback] = useState(null);
  const [sixthfeedback, setSixthfeedback] = useState(null);
  const [seventhfeedback, setSeventhfeedback] = useState(null);
  const [eighthfeedback, setEighthfeedback] = useState(null);
  const canNavigate =
    firstfeedback &&
    secondfeedback &&
    thirdfeedback &&
    forthfeedback &&
    sixthfeedback &&
    seventhfeedback &&
    eighthfeedback;
  console.log(eighthfeedback);
  //버튼 클릭마다 재 랜더링 되는거 한번 고민해보아야함.
  return (
    <div>
      <GlobalStyle />
      <Container>
        <FirstBox />
        <ScroleContainer>
          <ScroleImg />
          <ScroleText>스크롤해서 나의 여행 스케줄 생성하기</ScroleText>
        </ScroleContainer>
        <SecondBox setFirstfeedback={setFirstfeedback} />
        <ThirdBox setSecondfeedback={setSecondfeedback} />
        <ForthBox setThirdfeedback={setThirdfeedback} />
        <FifthBox setForthfeedback={setForthfeedback} />
        <SixBox setSixthfeedback={setSixthfeedback} />
        <SeventhBox setSeventhfeedback={setSeventhfeedback} />
        <EighthBox setEighthfeedback={setEighthfeedback} />
        <NinthBox canNavigate={canNavigate} />
      </Container>
    </div>
  );
}

export default Making;
