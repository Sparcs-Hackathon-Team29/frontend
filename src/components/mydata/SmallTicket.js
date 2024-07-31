import React from "react";
import styled from "styled-components";
import longticket from "../../img/ticket4.png";
import locationImg from "../../img/bienoh00_make_a_image_of_korean_palace_day_long_shot_f355ad6f-ee3c-4059-91c3-8ce1021c9833.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const FirstContain = styled.div`
  display: block;
  position: relative;
  width: 1316px;
  text-align: left;
`;

const TopText = styled.div`
  color: #000000;
  font-weight: 700;
  font-size: 20px;
`;

const FirstImg = styled.img`
  display: flex;
  gap: 16px;
  width: 650px;
  justify-content: center;
  margin: 0 auto;
  margin-top: -20px; // 간격 조정을 위해 음수 마진 적용
`;

const RightImage = styled.img`
  position: absolute;
  top: 7.5%;
  left: 72.5%;
  width: 148px;
  height: 148px;
  background-color: #000000;
  border: none;
  border-radius: 16px;
`;

const FirstBoxTitle = styled.div`
  font-family: "WAGURITTF";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  position: absolute;
  top: 12%;
  left: 5%;
  color: rgba(255, 255, 255, 0.9);
`;
const SecondBoxTitle = styled.div`
  font-family: "WAGURITTF";
  font-weight: normal;
  font-style: normal;
  font-size: 48px;
  position: absolute;
  top: 27%;
  left: 5%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 5.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 750px;
  color: white;
  font-size: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

const SemiRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

const ThirdTitleColor = styled.span`
  font-size: 32px;
  font-weight: 600;
  color: #2c3932;
  margin-right: 20px;
`;

const ThirdSubText = styled.div`
  flex: 1;
  text-align: left;
  font-size: 32px;
  font-weight: 400;
  color: rgba(20, 20, 20, 0.6);
  letter-spacing: 3%;
`;

const BottomSubText = styled.div`
  flex: 1;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: rgba(27, 27, 27, 0.6);
  letter-spacing: 3%;
  word-spacing: 5px;
`;

function Smallticket() {
  return (
    <FirstContain>
      <FirstImg src={longticket} alt="Background" />
      <RightImage src={locationImg} alt="Left Image" />
      <FirstBoxTitle>오늘의 랜덤 스팟</FirstBoxTitle>
      <SecondBoxTitle>홍대 M 그라운드</SecondBoxTitle>
      <TextContainer>
        <SemiRow>
          <BottomSubText>서울 종로구 사직로 161 경복궁</BottomSubText>
        </SemiRow>
        <SemiRow>
          <BottomSubText>24.07.31_21:36</BottomSubText>
        </SemiRow>
      </TextContainer>
    </FirstContain>
  );
}

export default Smallticket;
