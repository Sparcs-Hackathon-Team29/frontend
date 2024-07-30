import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import header_page_backgound_title from "../img/header_page_backgound_title.png";
import ticket1 from "../img/ticket1.png";
import ticket2 from "../img/ticket2.png";
import ticket3 from "../img/ticket3.png";
import longticket from "../img/longticket.png";

const Container = styled.div`
  display: block;
  height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -2%;
  left: 0;
  width: 100%;
  height: 1080px;
  object-fit: cover;
  z-index: -1;
`;

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  z-index: 0;
  gap: 16px;
`;

const Line = styled.div`
  width: 206px;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.1);

  &:last-child {
    margin-right: 0;
  }
`;

const FirstContain = styled.div`
  display: block;
  position: absolute;
  top: 700px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  margin: 20px auto; /* 중앙 정렬 */
  text-align: center; /* 자식 요소 중앙 정렬 */
`;

const FirstLeft = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;
const FirstTitleFont = styled.div`
  font-family: "WAGURITTF";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  font-size: 80px;
  letter-spacing: 3px;
  color: #000000;
  position: relative;
  z-index: 1;
  text-align: left;
  padding-bottom: 20px;
`;
const FirstMiddleFont = styled.div`
  font-size: 24px;
  letter-spacing: 3%;
  color: #000000;
  position: relative;
  z-index: 1;
  text-align: left;
  padding-bottom: 25px;
`;
const FirstRight = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const FirstContainTop = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 0;
`;
const FirstContainMid = styled.div`
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
`;
const FirstContainBot = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin: 20px auto; /* 중앙 정렬 */
  width: 100%;
  gap: 16px;
`;
const Button = styled.button`
  height: 64px;
  width: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: ${(props) => props.border || "none"};
  border-radius: 31.87px;
  color: ${(props) => props.color || "#F0F0F0"};
  background-color: ${(props) => props.backgroundColor || "#F0F0F0"};
`;
const FirstImg = styled.div`
  background-color: #123456;
  width: 650px;
  height: 410px;
  border: 1px solid lightgray;
  border-radius: 28px;
`;

const ImgContainer = styled.div`
  margin: 250px auto; /* 중앙 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollImg = styled.img`
  height: 70px;
  width: 300px;
  border: none;
  background-color: #123456;
`;

const SecondContain = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  top: 1250px;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 20px auto; /* 중앙 정렬 */
  text-align: center; /* 자식 요소 중앙 정렬 */
`;

const TitleFont = styled.div`
  font-size: 48px;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 72px;
  font-weight: 600;
  color: #000000;
  width: 100%;
  position: relative;
  z-index: 1;
`;
const SecondBot = styled.div`
  display: flex;
  gap: 16px;
  width: 1316px;
  justify-content: center;
  margin-top: 20px;
  margin: 0 auto;
`;
const TicketContainer = styled.div`
  position: relative;
  width: 428px;
  height: 466px;
  /* background-color: #123456; */
  border: 1px solid lightgray;
  border-radius: 28px;
  margin: 0 auto; /* 가로 중앙 정렬 */
`;
const TicketImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 28px;
  object-fit: cover;
`;

const TopText = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: ${(props) => props.color || "#ffffff"};
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  white-space: pre-line; /* 줄바꿈을 인식하게 하는 속성 */
`;

const BottomTextContain = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const BottomT = styled.div`
  font-family: "WAGURITTF";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  margin-bottom: 15px;
`;
const BottomB = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
`;
const ThirdContain = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 1650px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 1320px;
`;

const ForthContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 1750px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 880px;
  gap: 16px;
`;
const ForthLeft = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  background-color: #ccc;
`;
const ForthRight = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 224px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const SelectLeft = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
`;
const SelectRight = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
`;
const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
  height: 64px;
  width: 206px;
  z-index: 1;
  border: 1px solid rgba(40, 40, 40, 0.5);
  border-radius: 31.87px;
  margin-top: 10px;
`;
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
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  font-size: 50px;
  position: absolute;
  top: 35%;
  left: 18%;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 51%;
  left: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 760px;
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
  color: #2c3932;
  margin-right: 10px;
`;
const ThirdSubText = styled.div`
  flex: 1;
  text-align: left;
  font-size: 32px;
  color: ${(props) => props.color || "#2C3932"};
`;
const SixthContainer = styled.div``;
const SeventhContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 2700px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 1400px;
  padding-bottom: 150px;
  gap: 16px;
`;
const SeventhTitle = styled.div`
  font-size: 38px;
  text-align: center;
  padding-bottom: 72px;
  font-weight: 400;
  color: #000000;
  width: 100%;
  position: relative;
  z-index: 1;
`;
const SeventhLeft = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const SeventhRight = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const SeventhButton = styled.div`
  height: 64px;
  width: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.border || "none"};
  border-radius: 31px;
  color: ${(props) => props.color || "#ffffff"};
  background-color: ${(props) => props.backgroundColor || "#282828"};
`;
const Home = () => {
  return (
    <div>
      <BackgroundImage src={header_page_backgound_title} alt="Background" />
      <GlobalStyle />
      <Container>
        <LineContainer>
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
        </LineContainer>
        <FirstContain>
          <FirstContainBot>
            <Button color="#ffffff" backgroundColor="#000000">
              AI로 자동 생성
            </Button>
            <Button
              color="#000000"
              backgroundColor="#D4D4D4"
              border="1px solid #282828"
            >
              AI로 자동 생성
            </Button>
          </FirstContainBot>
        </FirstContain>
        <SecondContain>
          <TitleFont>'어디 갈래?' 라는 고민 해보시지 않으셨나요?</TitleFont>
          <SecondBot>
            <TicketContainer>
              <TicketImage src={ticket1} alt="ticket" />
              <TopText color="#000000">
                {"'여름방학 시작!\n이제 또 뭐하지???\nㅎㅎ 계획 없음'"}
              </TopText>
              <BottomTextContain>
                <BottomT>강지은</BottomT>
                <BottomB>17세 고등학생</BottomB>
              </BottomTextContain>
            </TicketContainer>
            <TicketContainer>
              <TicketImage src={ticket2} alt="ticket" />
              <TopText>
                {
                  "'햇살 좋아서 어디든 가고 싶은데...\n그렇다고 멀리 가기는 피곤하고'"
                }
              </TopText>
              <BottomTextContain>
                <BottomT>윤재호</BottomT>
                <BottomB>22세 디자이너</BottomB>
              </BottomTextContain>
            </TicketContainer>
            <TicketContainer>
              <TicketImage src={ticket3} alt="ticket" />
              <TopText>
                {
                  "'막상 아이들이랑 나가려고 하니\n마땅히 갈만한 곳이 생각이 안나요'"
                }
              </TopText>
              <BottomTextContain>
                <BottomT>이수진</BottomT>
                <BottomB>35세 쌍둥이 엄마</BottomB>
              </BottomTextContain>
            </TicketContainer>
          </SecondBot>
        </SecondContain>
        <ThirdContain>
          <TitleFont>
            내 상황에 맞는 행선지를 AI가 골라준다면 어떨까요?
          </TitleFont>
        </ThirdContain>
        <ForthContainer>
          <ForthLeft></ForthLeft>
          <ForthRight>
            <SelectLeft>
              <SelectBox>내 동네</SelectBox>
              <SelectBox>산책</SelectBox>
              <SelectBox>대중교통</SelectBox>
            </SelectLeft>
            <SelectRight>
              <SelectBox>애인</SelectBox>
              <SelectBox>저녁</SelectBox>
              <SelectBox>오후</SelectBox>
            </SelectRight>
          </ForthRight>
        </ForthContainer>
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
                <ThirdSubText> 저녁</ThirdSubText>
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
              <ThirdTitleColor>행선지:</ThirdTitleColor>
              <ThirdSubText>
                경복궁 광화문 대림 미술관 미술관 옆 돈가스 치킨 피자 햄버거
                탕후루
              </ThirdSubText>
            </SemiRow>
          </TextContainer>
        </FifthContainer>
        <SixthContainer></SixthContainer>
        <SeventhContainer>
          <SeventhLeft>
            <SeventhTitle>트래빗으로 스케줄 생성하기</SeventhTitle>
            <SeventhButton>AI 스케줄 생성</SeventhButton>
          </SeventhLeft>
          <SeventhRight>
            <SeventhTitle>트래빗이 추천하는 행선지 받아보기</SeventhTitle>
            <SeventhButton
              color="#1C1E1B"
              backgroundColor="#ffffff"
              border="1px solid #1C1E1B"
            >
              AI 행선지 추천
            </SeventhButton>
          </SeventhRight>
        </SeventhContainer>
      </Container>
    </div>
  );
};

export default Home;
