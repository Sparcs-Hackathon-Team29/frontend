import React, { useState } from "react";
import styled from "styled-components";

const ThridContainer = styled.div`
  display: block;
  position: absolute;
  top: 1810px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const ThridTitle = styled.div`
  color: #1b1b1b;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const ThridSubTitle = styled.div`
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

const SecondButton = styled.button`
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

const SecondButtonImg = styled.img`
  height: 96px;
  width: 96px;
  background-color: #dde2e0;
  padding: 0;
  margin-top: 32px;
  margin-bottom: 18px;
`;

const SecondButtonText = styled.div`
  height: 24px;
  font-size: 24px;
  font-weight: 400;
  padding: 0;
  margin-bottom: 25px;
`;

function ThirdBox({ setSecondfeedback }) {
  const [selectedSecondButton, setSecondSelectedButton] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = (buttonText) => {
    if (selectedSecondButton === buttonText) {
      setSecondSelectedButton(null);
      setIsButtonDisabled(false);
    } else {
      setSecondSelectedButton(buttonText);
      setIsButtonDisabled(true);
      setSecondfeedback(buttonText);
    }
  };

  return (
    <ThridContainer>
      <ThridTitle>누구와 함께 가시나요?</ThridTitle>
      <ThridSubTitle>함께 시간을 보낼 사람을 선택해주세요</ThridSubTitle>
      <ThirdButtonnBox>
        <SecondButton
          isSelected={selectedSecondButton === "어린이"}
          disabled={isButtonDisabled && selectedSecondButton !== "어린이"}
          onClick={() => handleButtonClick("어린이")}
        >
          <SecondButtonImg />
          <SecondButtonText>어린이</SecondButtonText>
        </SecondButton>
        <SecondButton
          isSelected={selectedSecondButton === "부모님"}
          disabled={isButtonDisabled && selectedSecondButton !== "부모님"}
          onClick={() => handleButtonClick("부모님")}
        >
          <SecondButtonImg />
          <SecondButtonText>부모님</SecondButtonText>
        </SecondButton>
        <SecondButton
          isSelected={selectedSecondButton === "친구"}
          disabled={isButtonDisabled && selectedSecondButton !== "친구"}
          onClick={() => handleButtonClick("친구")}
        >
          <SecondButtonImg />
          <SecondButtonText>친구</SecondButtonText>
        </SecondButton>
        <SecondButton
          isSelected={selectedSecondButton === "애인"}
          disabled={isButtonDisabled && selectedSecondButton !== "애인"}
          onClick={() => handleButtonClick("애인")}
        >
          <SecondButtonImg />
          <SecondButtonText>애인</SecondButtonText>
        </SecondButton>
        <SecondButton
          isSelected={selectedSecondButton === "혼자"}
          disabled={isButtonDisabled && selectedSecondButton !== "혼자"}
          onClick={() => handleButtonClick("혼자")}
        >
          <SecondButtonImg />
          <SecondButtonText>혼자</SecondButtonText>
        </SecondButton>
      </ThirdButtonnBox>
    </ThridContainer>
  );
}

export default ThirdBox;
