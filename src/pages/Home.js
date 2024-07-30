import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

const Container = styled.div`
  display: block;
  height: 100vh;
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
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin: 0 auto; /* 중앙 정렬 */
  width: 1320px;
  gap: 20px;
  padding-top: 20%;
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
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 35px;
  width: 80%;
  gap: 23px;
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
  margin: 20px auto; /* 중앙 정렬 */
  text-align: center; /* 자식 요소 중앙 정렬 */
`;

const SecondText = styled.div`
  font-size: 40px;
  letter-spacing: 2px;
  padding-bottom: 72px;
  margin: 0 auto; /* 가로 중앙 정렬 */
`;

const SecondImg = styled.div`
  background-color: #123456;
  width: 650px;
  height: 410px;
  border: 1px solid lightgray;
  border-radius: 28px;
  margin: 0 auto; /* 가로 중앙 정렬 */
`;
const ThirdContain = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin: 0 auto; /* 중앙 정렬 */
  width: 1320px;
  gap: 20px;
  margin-top: 500px;
  background-color: #123456;
`;
const ThirdLeft = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  background-color: #ccc;
`;
const ThirdTitleFont = styled.div`
  font-family: "WAGURITTF";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  font-size: 128px;
  letter-spacing: 3px;
  color: #000000;
  width: 80%;
  position: relative;
  z-index: 1;
  text-align: left;
  padding-bottom: 20px;
`;
const ThirdMiddleFont = styled.div`
  font-size: 48px;
  letter-spacing: 3%;
  color: #000000;
  width: 80%;
  position: relative;
  z-index: 1;
  text-align: left;
  padding-bottom: 25px;
`;
const ThirdRight = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f22;
`;

const Home = () => {
  return (
    <Container>
      <GlobalStyle />
      <LineContainer>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </LineContainer>
      <FirstContain>
        <FirstLeft>
          <FirstContainTop>
            <FirstTitleFont>지금 당장 떠나고 </FirstTitleFont>
            <FirstTitleFont>싶으신가요?</FirstTitleFont>
          </FirstContainTop>
          <FirstContainMid>
            <FirstMiddleFont>
              지금 당장 어디론가 떠나고 싶진 않으신가요?
            </FirstMiddleFont>
          </FirstContainMid>
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
        </FirstLeft>
        <FirstRight>
          <FirstImg></FirstImg>
        </FirstRight>
      </FirstContain>
      <ImgContainer>
        <ScrollImg />
      </ImgContainer>
      <SecondContain>
        <SecondText>당장 떠나고 싶은데 어디로 갈지 모르겠다면?</SecondText>
        <SecondImg></SecondImg>
      </SecondContain>
      <ThirdContain>
        <ThirdLeft>
          <ThirdMiddleFont>지금 당장 떠나야 할 때</ThirdMiddleFont>
          <ThirdTitleFont>트레빗</ThirdTitleFont>
        </ThirdLeft>
        <ThirdRight></ThirdRight>
      </ThirdContain>
    </Container>
  );
};

export default Home;
