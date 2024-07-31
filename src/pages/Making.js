import React, { useState, useEffect } from "react";
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

import scrollimg from "../img/Group 60028.png";
import footing from "../img/foooteer.png";
import axios from "axios";
import { useAuth } from "../AuthContext";
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
const ScroleImg = styled.img`
  height: 24px;
  width: 24px;
  margin: 10px auto;
  object-fit: cover;
`;
const ScroleText = styled.div`
  color: #1b1b1b;
  font-size: 24px;
  font-weight: 400;
`;
const FootBackgroundImage = styled.img`
  position: relative;
  width: 100%;
  background: #ccc;
  margin-top: 290%;
  width: 100%; // 너비를 화면 전체로 설정
  object-fit: cover; // 이미지가 컨테이너를 꽉 채우도록 설정
  z-index: -2; // 다른 요소들이 위에 오도록 z-index 설정
`;
function Making() {
  const [firstfeedback, setFirstfeedback] = useState(null);
  const [secondfeedback, setSecondfeedback] = useState(null);
  const [thirdfeedback, setThirdfeedback] = useState(null);
  const [forthfeedback, setForthfeedback] = useState(null);
  const [sixthfeedback, setSixthfeedback] = useState(null);
  const [seventhfeedback, setSeventhfeedback] = useState(null);
  const [eighthfeedback, setEighthfeedback] = useState(null);
  const [feedbackData, setFeedbackData] = useState({});

  const { setMySelect } = useAuth();

  const canNavigate =
    firstfeedback &&
    secondfeedback &&
    thirdfeedback &&
    forthfeedback &&
    sixthfeedback &&
    seventhfeedback &&
    eighthfeedback;

  useEffect(() => {
    if (sixthfeedback && seventhfeedback) {
      const keywords = [
        firstfeedback,
        secondfeedback,
        thirdfeedback,
        forthfeedback,
        eighthfeedback,
      ]
        .filter(Boolean)
        .join(", "); // 빈 값 제거하고 쉼표로 구분

      const newFeedbackData = {
        role: "user",
        content: `지역 : ${sixthfeedback} | 시간 : ${seventhfeedback} | 키워드 : ${keywords}`,
      };
      const textfeedbackdata = JSON.stringify(newFeedbackData);
      setFeedbackData(textfeedbackdata); // 상태 업데이트
    }
  }, [
    firstfeedback,
    secondfeedback,
    thirdfeedback,
    forthfeedback,
    sixthfeedback,
    seventhfeedback,
    eighthfeedback,
  ]); // 의존성 배열
  // const handleSubmit = async () => {
  //   console.log(feedbackData);
  //   try {
  //     const mydataResponse = await axios.post(
  //       "https://3763-106-101-130-32.ngrok-free.app/api/completion",
  //       { feedbackData }, // 요청 본문
  //       {
  //         headers: {
  //           access: localStorage.getItem("access"), // 로컬 스토리지에서 토큰 가져오기
  //         },
  //       }
  //     );
  //     console.log("Admin page response:", mydataResponse); // 성공적인 응답 로깅
  //     setMySelect(mydataResponse);
  //   } catch (error) {
  //     console.error("Admin page 요청 중 오류가 발생했습니다:", error); // 에러 객체 로깅
  //   }
  // };

  return (
    <div>
      <GlobalStyle />
      <Container>
        <FirstBox />
        <ScroleContainer>
          <ScroleImg src={scrollimg} alt="스크롤 이미지" />
          <ScroleText>스크롤해서 나의 여행 스케줄 생성하기</ScroleText>
        </ScroleContainer>
        <SecondBox setFirstfeedback={setFirstfeedback} />
        <ThirdBox setSecondfeedback={setSecondfeedback} />
        <ForthBox setThirdfeedback={setThirdfeedback} />
        <FifthBox setForthfeedback={setForthfeedback} />
        <SixBox setSixthfeedback={setSixthfeedback} />
        <SeventhBox setSeventhfeedback={setSeventhfeedback} />
        <EighthBox setEighthfeedback={setEighthfeedback} />
        <NinthBox canNavigate={canNavigate} feedbackData={feedbackData} />
        <FootBackgroundImage src={footing} alt="푸우우우우터" />
      </Container>
    </div>
  );
}

export default Making;
