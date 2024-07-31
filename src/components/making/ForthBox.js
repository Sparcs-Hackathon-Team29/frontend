import React, { useState } from "react";
import styled from "styled-components";

const ForthContainer = styled.div`
  display: block;
  position: absolute;
  top: 2450px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const ForthTitle = styled.div`
  color: #1b1b1b;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const ForthSubTitle = styled.div`
  color: rgba(40, 40, 40, 0.5);
  font-size: 32px;
  font-weight: 500;
`;

const ThirdButtonnBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin: 20px auto;
  margin-top: 72px;
  width: 100%;
  gap: 16px;
`;

const ThirdButton = styled.button`
  height: 206px;
  width: 206px;
  display: block;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(40, 40, 40, 0.5);
  border-radius: 16px;
  color: ${(props) => (props.isSelected ? "#FBFBFB" : "#1B1B1B")};
  font-size: 20px;
  background-color: ${(props) => (props.isSelected ? "#1B1B1B" : "#FBFBFB")};
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const ThirdButtonImg = styled.img`
  height: 96px;
  width: 96px;
  background-color: #dde2e0;
  padding: 0;
  margin-top: 32px;
  margin-bottom: 18px;
`;

const ThirdButtonText = styled.div`
  height: 24px;
  font-size: 24px;
  font-weight: 400;
  padding: 0;
  margin-bottom: 25px;
`;

function ForthBox({ setThirdfeedback }) {
  const [selectedThirdButton, setThirdSelectedButton] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = (buttonText) => {
    if (selectedThirdButton === buttonText) {
      setThirdSelectedButton(null);
      setIsButtonDisabled(false);
    } else {
      setThirdSelectedButton(buttonText);
      setIsButtonDisabled(true);
      setThirdfeedback(buttonText);
    }
  };

  return (
    <ForthContainer>
      <ForthTitle>주요 이동 수단은 어떻게 되나요?</ForthTitle>
      <ForthSubTitle>주요 이동 수단을 하나만 골라주세요</ForthSubTitle>
      <ThirdButtonnBox>
        <ThirdButton
          isSelected={selectedThirdButton === "도보"}
          disabled={isButtonDisabled && selectedThirdButton !== "도보"}
          onClick={() => handleButtonClick("도보")}
        >
          <ThirdButtonImg />
          <ThirdButtonText>도보</ThirdButtonText>
        </ThirdButton>
        <ThirdButton
          isSelected={selectedThirdButton === "자차"}
          disabled={isButtonDisabled && selectedThirdButton !== "자차"}
          onClick={() => handleButtonClick("자차")}
        >
          <ThirdButtonImg />
          <ThirdButtonText>자차</ThirdButtonText>
        </ThirdButton>
        <ThirdButton
          isSelected={selectedThirdButton === "자전거"}
          disabled={isButtonDisabled && selectedThirdButton !== "자전거"}
          onClick={() => handleButtonClick("자전거")}
        >
          <ThirdButtonImg />
          <ThirdButtonText>자전거</ThirdButtonText>
        </ThirdButton>
        <ThirdButton
          isSelected={selectedThirdButton === "대중교통"}
          disabled={isButtonDisabled && selectedThirdButton !== "대중교통"}
          onClick={() => handleButtonClick("대중교통")}
        >
          <ThirdButtonImg />
          <ThirdButtonText>대중교통</ThirdButtonText>
        </ThirdButton>
      </ThirdButtonnBox>
    </ForthContainer>
  );
}

export default ForthBox;
