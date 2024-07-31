import styled from "styled-components";
import longticket from "../../img/longticket.png";
const FifthContainer = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  top: 2050px;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 20px auto;
  text-align: center;
`;
const TitleFont = styled.div`
  font-size: 48px;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 40px;
  font-weight: 600;
  color: #000000;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const FifthImg = styled.img`
  display: flex;
  gap: 16px;
  width: 1316px;
  justify-content: center;
  margin-top: 20px;
  margin: 0 auto;
`;
const LeftImage = styled.img`
  position: absolute;
  top: 50%;
  left: 18%;
  width: 200px;
  height: 200px;
  background-color: #000000;
  border: none;
  border-radius: 16px;
`;
const FifthTitle = styled.div`
  font-family: "WAGURITTF";
  font-weight: normal;
  font-style: normal;
  font-size: 50px;
  position: absolute;
  top: 31%;
  left: 18%;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 51%;
  left: 31%;
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
  align-items: flex-start; /* 수정된 부분 */
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

function FifthHomeBox() {
  return (
    <FifthContainer>
      <TitleFont>내가 고민하던 나의 행선지와 일정을 골라줘요</TitleFont>
      <FifthImg src={longticket} alt="Background" />
      <LeftImage alt="Left Image" />
      <FifthTitle>나의 서울 경복궁역 산책</FifthTitle>
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
            <ThirdSubText>{/*레이아웃 용 요소*/}</ThirdSubText>
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
    </FifthContainer>
  );
}

export default FifthHomeBox;
