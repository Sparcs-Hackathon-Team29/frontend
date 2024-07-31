import styled from "styled-components";
import { useState, useEffect } from "react";

const EighthContainer = styled.div`
  display: block;
  position: absolute;
  top: 4610px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const EighthTitle = styled.div`
  color: #1b1b1b;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const EighthSubTitle = styled.div`
  color: rgba(40, 40, 40, 0.5);
  font-size: 32px;
  font-weight: 500;
`;

const EighthButtonBox = styled.div`
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

const EighthButton = styled.button`
  height: 206px;
  width: 206px;
  display: block;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid rgba(40, 40, 40, 0.5);
  border-radius: 16px;
  color: ${(props) => (props.isSelected ? "#FBFBFB" : "#1B1B1B")};
  font-size: 20px;
  background-color: ${(props) => (props.isSelected ? "#1B1B1B" : "#FBFBFB")};
  cursor: pointer;
`;

const EighthButtonImg = styled.img`
  height: 96px;
  width: 96px;
  background-color: #dde2e0;
  margin-bottom: 15px;
`;

const EighthButtonText = styled.div`
  font-size: 24px;
`;

function EighthBox({ setEighthfeedback }) {
  const [selectedButtons, setSelectedButtons] = useState([]);

  useEffect(() => {
    setEighthfeedback(selectedButtons.join(" "));
  }, [selectedButtons, setEighthfeedback]);

  const handleButtonClick = (buttonText) => {
    setSelectedButtons((prev) => {
      const newState = prev.includes(buttonText)
        ? prev.filter((item) => item !== buttonText)
        : [...prev, buttonText];
      return newState;
    });
  };

  return (
    <EighthContainer>
      <EighthTitle>마지막으로 고려할 사항이 있을까요?</EighthTitle>
      <EighthSubTitle>여행지 선택에 영향을 주는 사항들이에요</EighthSubTitle>
      <EighthButtonBox>
        <EighthButton
          isSelected={selectedButtons.includes("반려동물")}
          onClick={() => handleButtonClick("반려동물")}
        >
          <EighthButtonImg />
          <EighthButtonText>반려동물</EighthButtonText>
        </EighthButton>
        <EighthButton
          isSelected={selectedButtons.includes("주차 가능")}
          onClick={() => handleButtonClick("주차 가능")}
        >
          <EighthButtonImg />
          <EighthButtonText>주차 가능</EighthButtonText>
        </EighthButton>
      </EighthButtonBox>
    </EighthContainer>
  );
}

export default EighthBox;
