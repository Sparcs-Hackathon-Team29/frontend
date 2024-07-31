import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const TopMessage = styled.div`
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 3%;
  color: #1b1b1b;
  margin-bottom: 40px;
`;
const Message = styled.div`
  font-family: "WAGURITTF";
  font-size: 96px;
  color: #1b1b1b;
  margin-bottom: 16px;
`;

const HighlightedText = styled.span`
  font-size: 96px;
  font-weight: 400;
  letter-spacing: 4%;
  color: ${(props) => props.color};
`;

const BottomText = styled.div`
  font-size: 24px;
  color: rgba(27, 27, 27, 0.6);
  margin-top: 16px;
`;

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/myspot");
    }, 1000); // 30초 후에 "/" 페이지로 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <Container>
      <TopMessage>잠시만 기다려주세요</TopMessage>
      <Message>
        <HighlightedText color="#20FB7C">트레빗</HighlightedText>
        <HighlightedText>
          이 <HighlightedText color="#7135F0">추천 스팟</HighlightedText>을
        </HighlightedText>
      </Message>
      <Message>생성 중이에요</Message>
      <BottomText>
        교통 정보는 교통 상황과 시간에 따라 정확하지 않을 수 있습니다
      </BottomText>
    </Container>
  );
}

export default Loading;
