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
  justify-content: center;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 20px;
  width: 100%;
  gap: 16px;
`;

const SecondBottomButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
`;

function SecondBox({ setFirstfeedback }) {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const buttons = [
    { label: "힐링 / 휴식", value: "힐링 휴식" },
    { label: "실내 액티비티", value: "실내 액티비티" },
    { label: "산책 / 걷기", value: "산책 걷기" },
    { label: "이색 체험", value: "이색 체험" },
    { label: "예술 / 전시", value: "예술 전시" },
    { label: "영화 / 공연", value: "영화 공연" },
    { label: "맛집 투어", value: "맛집 투어" },
    { label: "스포츠 활동", value: "스포츠 활동" },
    { label: "노래방", value: "노래방" },
    { label: "게임 / 보드게임", value: "게임 보드게임" },
    { label: "카페 / 찻집", value: "카페 찻집" },
    { label: "역사 / 유적지", value: "역사 유적지" },
  ];

  const handleButtonClick = (button) => {
    const index = selectedButtons.indexOf(button.value);
    let newSelectedButtons = [...selectedButtons];

    if (index === -1) {
      if (newSelectedButtons.length < 3) {
        newSelectedButtons.push(button.value);
      }
    } else {
      newSelectedButtons.splice(index, 1);
    }

    setSelectedButtons(newSelectedButtons);
    setFirstfeedback(newSelectedButtons); // 상태가 업데이트될 때마다 선택된 버튼 목록을 전달합니다.
  };

  return (
    <SecondContainer>
      <SecondTitle>어떤 활동을 하고 싶으신가요?</SecondTitle>
      <SecondSubTitle>
        지금 가장 하고 싶은 것을 하나만 골라 주세요
      </SecondSubTitle>
      <SecondTopButtonBox>
        {buttons.slice(0, 6).map((button) => (
          <FirstButton
            key={button.value}
            isSelected={selectedButtons.includes(button.value)}
            onClick={() => handleButtonClick(button)}
          >
            {button.label}
          </FirstButton>
        ))}
      </SecondTopButtonBox>
      <SecondBottomButtonBox>
        {buttons.slice(6).map((button) => (
          <FirstButton
            key={button.value}
            isSelected={selectedButtons.includes(button.value)}
            onClick={() => handleButtonClick(button)}
          >
            {button.label}
          </FirstButton>
        ))}
      </SecondBottomButtonBox>
    </SecondContainer>
  );
}

export default SecondBox;
