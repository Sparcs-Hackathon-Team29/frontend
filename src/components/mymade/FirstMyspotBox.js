import React from "react";
import styled from "styled-components";
import longticket from "../../img/longticket.png";

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
  width: 1316px;
  justify-content: center;
  margin: 0 auto;
  margin-top: -20px; // 간격 조정을 위해 음수 마진 적용
`;

const LeftImage = styled.img`
  position: absolute;
  top: 42%;
  left: 5%;
  width: 200px;
  height: 200px;
  background-color: #000000;
  border: none;
  border-radius: 16px;
`;

const FirstBoxTitle = styled.div`
  font-family: "WAGURITTF";
  font-weight: normal;
  font-style: normal;
  font-size: 50px;
  position: absolute;
  top: 23%;
  left: 5%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 42%;
  left: 23%;
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
  margin-bottom: 10px;
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
  font-size: 32px;
  font-weight: 400;
  color: rgba(20, 20, 20, 0.6);
  letter-spacing: 3%;
  word-spacing: 15px;
`;

function FirstMyspotBox() {
  return (
    <FirstContain>
      <TopText>2024.08.01 19:21 생성</TopText>
      <FirstImg src={longticket} alt="Background" />
      <LeftImage alt="Left Image" />
      <FirstBoxTitle>나의 서울 경복궁역 산책</FirstBoxTitle>
      <TextContainer>
        <Row>
          <SemiRow>
            <ThirdTitleColor>일시</ThirdTitleColor>
            <ThirdSubText> 24.08.01</ThirdSubText>
          </SemiRow>
          <SemiRow>
            <ThirdTitleColor>오후</ThirdTitleColor>
            <ThirdTitleColor> 저녁</ThirdTitleColor>
          </SemiRow>
          <SemiRow>
            <ThirdSubText>{/* 레이아웃 용 요소 */}</ThirdSubText>
          </SemiRow>
        </Row>
        <Row>
          <SemiRow>
            <ThirdTitleColor>이동</ThirdTitleColor>
            <ThirdSubText>대중교통</ThirdSubText>
          </SemiRow>
          <SemiRow>
            <ThirdTitleColor>거리</ThirdTitleColor>
            <ThirdSubText>내 동네</ThirdSubText>
          </SemiRow>
          <SemiRow>
            <ThirdTitleColor>동반</ThirdTitleColor>
            <ThirdSubText>애인</ThirdSubText>
          </SemiRow>
        </Row>
        <SemiRow>
          <ThirdTitleColor>행선지</ThirdTitleColor>
          <BottomSubText>
            경복궁 광화문 대림 미술관 미술관 옆 돈가스
          </BottomSubText>
        </SemiRow>
      </TextContainer>
    </FirstContain>
  );
}

export default FirstMyspotBox;
