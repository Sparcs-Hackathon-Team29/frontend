import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import header_page_backgound_title from "../img/header_page_backgound_title.png";

import FirstHomeBox from "../components/home/FirstHomeBox";
import SecondHomeBox from "../components/home/SecondHomeBox";
import ForthHomeBox from "../components/home/ForthHomeBox";
import FifthHomeBox from "../components/home/FifthHomeBox";
import SixHomeBox from "../components/home/SixthHomeBox";
import SeventhHomeBox from "../components/home/SeventhHomeBox";

const Container = styled.div`
  display: block;
  height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 1080px;
  object-fit: cover;
  z-index: -1;
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
const TirdTitleFont = styled.div`
  font-size: 48px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 600;
  color: #000000;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Home = () => {
  return (
    <div>
      <BackgroundImage src={header_page_backgound_title} alt="Background" />
      <GlobalStyle />
      <Container>
        <FirstHomeBox />
        <SecondHomeBox />
        <ThirdContain>
          <TirdTitleFont>
            내 상황에 맞는 장소를 AI가 골라준다면 어떨까요?
          </TirdTitleFont>
        </ThirdContain>
        <ForthHomeBox />
        <FifthHomeBox />
        <SixHomeBox />
        <SeventhHomeBox />
      </Container>
    </div>
  );
};

export default Home;
