import React, { useState } from "react";
import styled from "styled-components";

const FifthContainer = styled.div`
  display: block;
  position: absolute;
  top: 3090px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const FifthTitle = styled.div`
  color: #1b1b1b;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const FifthSubTitle = styled.div`
  color: rgba(40, 40, 40, 0.5);
  font-size: 32px;
  font-weight: 500;
`;

const ForthButtonnBox = styled.div`
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

const ForthButton = styled.button`
  height: 106px;
  width: 206px;
  display: block;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(40, 40, 40, 0.5);
  border-radius: 16px;
  color: ${(props) => (props.isSelected ? "#20FB7C" : "#1B1B1B")};
  font-size: 20px;
  background-color: ${(props) => (props.isSelected ? "#1B1B1B" : "#FBFBFB")};
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const ForthButtonTitleText = styled.div`
  color: ${(props) => (props.isSelected ? "#20FB7C" : "#1B1B1B")};
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const ForthButtonSubText = styled.div`
  color: ${(props) =>
    props.isSelected ? "rgba(251,251,251,0.6)" : "rgba(40,40,40,0.5)"};
  font-weight: 400;
  font-size: 17px;
`;

function FifthBox({ setForthfeedback }) {
  const [selectedForthButton, setForthSelectedButton] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = (buttonText) => {
    if (selectedForthButton === buttonText) {
      setForthSelectedButton(null);
      setIsButtonDisabled(false);
    } else {
      setForthSelectedButton(buttonText);
      setIsButtonDisabled(true);
      setForthfeedback(buttonText);
    }
  };

  return (
    <FifthContainer>
      <FifthTitle>거리는 어떻게 되나요?</FifthTitle>
      <FifthSubTitle>3km는 지하철 기준 2~3정거장이에요</FifthSubTitle>
      <ForthButtonnBox>
        <ForthButton
          isSelected={selectedForthButton === "1~3km"}
          disabled={isButtonDisabled && selectedForthButton !== "1~3km"}
          onClick={() => handleButtonClick("1~3km")}
        >
          <ForthButtonTitleText
            isSelected={selectedForthButton === "1~3km"}
            disabled={isButtonDisabled && selectedForthButton !== "1~3km"}
          >
            내 동네
          </ForthButtonTitleText>
          <ForthButtonSubText
            isSelected={selectedForthButton === "1~3km"}
            disabled={isButtonDisabled && selectedForthButton !== "1~3km"}
          >
            1~3km
          </ForthButtonSubText>
        </ForthButton>
        <ForthButton
          isSelected={selectedForthButton === "3km 이상"}
          disabled={isButtonDisabled && selectedForthButton !== "3km 이상"}
          onClick={() => handleButtonClick("3km 이상")}
        >
          <ForthButtonTitleText
            isSelected={selectedForthButton === "3km 이상"}
            disabled={isButtonDisabled && selectedForthButton !== "3km 이상"}
          >
            주변 동네
          </ForthButtonTitleText>
          <ForthButtonSubText
            isSelected={selectedForthButton === "3km 이상"}
            disabled={isButtonDisabled && selectedForthButton !== "3km 이상"}
          >
            3km 이상
          </ForthButtonSubText>
        </ForthButton>
      </ForthButtonnBox>
    </FifthContainer>
  );
}

export default FifthBox;
