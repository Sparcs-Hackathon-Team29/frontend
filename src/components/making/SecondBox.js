import styled from "styled-components";
import { useState } from "react";
const SecondContainer = styled.div`
  display: block;
  position: absolute;
  top: 1170px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const SecondTitle = styled.div`
  color: #1b1b1b;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 16px;
`;
const SecondSubTitle = styled.div`
  color: rgba(40, 40, 40, 0.5);
  font-size: 32px;
  font-weight: 500;
`;
const SecondTopButtonBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 20px auto; /* 중앙 정렬 */
  margin-top: 72px;
  width: 100%;
  gap: 16px;
`;
const SecondBottomButtonBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin: 0 auto; /* 중앙 정렬 */
  width: 100%;
  gap: 16px;
`;
const FirstButton = styled.button`
  height: 64px;
  width: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid rgba(40, 40, 40, 0.5);
  border-radius: 31.87px;
  color: ${(props) => (props.isSelected ? "#20FB7C" : "#1B1B1B")};
  font-size: 20px;
  background-color: ${(props) => (props.isSelected ? "#1B1B1B" : "#FBFBFB")};
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

function SecondBox({ setFirstfeedback }) {
  const [selectedFirstButton, setFirstSelectedButton] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const buttons = [
    "힐링 / 휴식",
    "실내 액티비티",
    "산책 / 걷기",
    "이색 체험",
    "예술 / 전시",
    "영화 / 공연",
    "맛집 투어",
    "스포츠 활동",
    "노래방",
    "게임 / 보드게임",
    "카페 / 찻집",
    "역사 / 유적지",
  ];

  const handleButtonClick = (buttonText) => {
    if (selectedFirstButton === buttonText) {
      setFirstSelectedButton(null);
      setIsButtonDisabled(false);
    } else {
      setFirstSelectedButton(buttonText);
      setIsButtonDisabled(true);
      setFirstfeedback(buttonText);
    }
  };

  return (
    <SecondContainer>
      <SecondTitle>어떤 활동을 하고 싶으신가요?</SecondTitle>
      <SecondSubTitle>
        지금 가장 하고 싶은 것을 하나만 골라 주세요
      </SecondSubTitle>
      <SecondTopButtonBox>
        {buttons.slice(0, 6).map((buttonText) => (
          <FirstButton
            key={buttonText}
            isSelected={selectedFirstButton === buttonText}
            isDisabled={isButtonDisabled && selectedFirstButton !== buttonText}
            onClick={() => handleButtonClick(buttonText)}
          >
            {buttonText}
          </FirstButton>
        ))}
      </SecondTopButtonBox>
      <SecondBottomButtonBox>
        {buttons.slice(6).map((buttonText) => (
          <FirstButton
            key={buttonText}
            isSelected={selectedFirstButton === buttonText}
            isDisabled={isButtonDisabled && selectedFirstButton !== buttonText}
            onClick={() => handleButtonClick(buttonText)}
          >
            {buttonText}
          </FirstButton>
        ))}
      </SecondBottomButtonBox>
    </SecondContainer>
  );
}

export default SecondBox;
