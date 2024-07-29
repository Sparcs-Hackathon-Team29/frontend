import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: flex;
  align-items: center;
  justify-content: center;
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
  height: 100%;
  z-index: 0;
  gap: 16px;
`;

const Line = styled.div`
  width: 206px;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.1);

  &:last-child {
    margin-right: 0;
  }
`;

const TitleFont = styled.div`
  font-size: 56px;
  color: #000000;
  position: relative;
  z-index: 1;
  text-align: left;
`;
const First_Contain = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 20%;
  margin-left: 17%;
  width: 1260px;
`;
const First_Left = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0; /* 테스트를 위한 배경색 */
`;
const First_right = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;
const First_contain_Top = styled.div`
  margin: 10px;
  background-color: #ccc;
  padding: 20px;
  width: 80%;
  text-align: center;
`;
const First_contain_Bot = styled.div`
  margin: 10px;
  background-color: #ccc;
  padding: 20px;
  width: 80%;
  align-items: center;
`;
const First_Img = styled.div`
  background-color: #123456;
  width: 650px;
  height: 410px;
  border: 1px solid lightgray;
  border-radius: 28px;
`;
const Home = () => {
  return (
    <Container>
      <LineContainer>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </LineContainer>
      <First_Contain>
        <First_Left>
          <First_contain_Top>
            <TitleFont>나만의</TitleFont>
            <TitleFont>여행 일정 만들기</TitleFont>
          </First_contain_Top>
          <First_contain_Bot>아래</First_contain_Bot>
        </First_Left>
        <First_right>
          <First_Img></First_Img>
        </First_right>
      </First_Contain>
    </Container>
  );
};

export default Home;
