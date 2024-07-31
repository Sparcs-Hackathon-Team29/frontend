import React, { useState } from "react";
import styled from "styled-components";

const SeventhContainer = styled.div`
  display: block;
  position: absolute;
  top: 4010px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const SeventhTitle = styled.div`
  color: #1b1b1b;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const SeventhSubTitle = styled.div`
  color: rgba(40, 40, 40, 0.5);
  font-size: 32px;
  font-weight: 500;
`;

const SeventhButtonnBox = styled.div`
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

const SeventhButton = styled.button`
  height: 229px;
  width: 206px;
  display: block;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(40, 40, 40, 0.5);
  border-radius: 16px;
  font-size: 20px;
  background-color: ${(props) => (props.isSelected ? "#1B1B1B" : "#FBFBFB")};
  cursor: pointer;
`;

const SeventhButtonImg = styled.img`
  height: 96px;
  width: 96px;
  background-color: #dde2e0;
  padding: 0;
  margin-top: 28px;
  margin-bottom: 10px;
`;

const SeventhButtonText = styled.div`
  color: ${(props) => (props.isSelected ? "#20FB7C" : "#1B1B1B")};
  font-size: 24px;
  font-weight: 400;
  padding: 0;
  margin-bottom: 5px;
`;

const SeventhButtonSubText = styled.div`
  color: ${(props) =>
    props.isSelected ? "rgba(251, 251, 251, 0.6)" : "rgba(27, 27, 27, 0.5)"};
  font-size: 17px;
  margin-bottom: 10px;
`;

function SeventhBox({ setSeventhfeedback }) {
  const [selectedSeventhButtons, setSeventhSelectedButtons] = useState([]);

  const handleButtonClick = (buttonText) => {
    let newSelectedButtons;
    if (selectedSeventhButtons.includes(buttonText)) {
      newSelectedButtons = selectedSeventhButtons.filter(
        (button) => button !== buttonText
      );
    } else {
      newSelectedButtons = [...selectedSeventhButtons, buttonText];
    }
    setSeventhSelectedButtons(newSelectedButtons);
    setSeventhfeedback(newSelectedButtons.join(" "));
  };

  return (
    <SeventhContainer>
      <SeventhTitle>원하시는 시간대가 있나요?</SeventhTitle>
      <SeventhSubTitle>
        어느 시간대에 가기를 희망하시나요? 원하는 시간대를 전부 눌러주세요
      </SeventhSubTitle>
      <SeventhButtonnBox>
        <SeventhButton
          isSelected={selectedSeventhButtons.includes("09:00~12:00")}
          onClick={() => handleButtonClick("09:00~12:00")}
        >
          <SeventhButtonImg />
          <SeventhButtonText
            isSelected={selectedSeventhButtons.includes("09:00~12:00")}
          >
            오전
          </SeventhButtonText>
          <SeventhButtonSubText
            isSelected={selectedSeventhButtons.includes("09:00~12:00")}
          >
            09:00~12:00
          </SeventhButtonSubText>
        </SeventhButton>
        <SeventhButton
          isSelected={selectedSeventhButtons.includes("12:00~17:00")}
          onClick={() => handleButtonClick("12:00~17:00")}
        >
          <SeventhButtonImg />
          <SeventhButtonText
            isSelected={selectedSeventhButtons.includes("12:00~17:00")}
          >
            오후
          </SeventhButtonText>
          <SeventhButtonSubText
            isSelected={selectedSeventhButtons.includes("12:00~17:00")}
          >
            12:00~17:00
          </SeventhButtonSubText>
        </SeventhButton>
        <SeventhButton
          isSelected={selectedSeventhButtons.includes("17:00~22:00")}
          onClick={() => handleButtonClick("17:00~22:00")}
        >
          <SeventhButtonImg />
          <SeventhButtonText
            isSelected={selectedSeventhButtons.includes("17:00~22:00")}
          >
            저녁
          </SeventhButtonText>
          <SeventhButtonSubText
            isSelected={selectedSeventhButtons.includes("17:00~22:00")}
          >
            17:00~22:00
          </SeventhButtonSubText>
        </SeventhButton>
        <SeventhButton
          isSelected={selectedSeventhButtons.includes("22:00 이후")}
          onClick={() => handleButtonClick("22:00 이후")}
        >
          <SeventhButtonImg />
          <SeventhButtonText
            isSelected={selectedSeventhButtons.includes("22:00 이후")}
          >
            심야
          </SeventhButtonText>
          <SeventhButtonSubText
            isSelected={selectedSeventhButtons.includes("22:00 이후")}
          >
            22:00 이후
          </SeventhButtonSubText>
        </SeventhButton>
      </SeventhButtonnBox>
    </SeventhContainer>
  );
}

export default SeventhBox;
