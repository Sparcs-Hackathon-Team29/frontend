import React, { useState } from "react";
import styled from "styled-components";
import child_active from "../../img/icons/아이 활성.png";
import child_disactive from "../../img/icons/아이_비활성.png";
import parents_active from "../../img/icons/가족_활성.png";
import parents_disactive from "../../img/icons/가족_비활성.png";
import friend_active from "../../img/icons/친구_활성.png";
import friend_disactive from "../../img/icons/친구_비활성.png";
import love_active from "../../img/icons/애인_활성.png";
import love_disactive from "../../img/icons/애인_비활성.png";
import alone_active from "../../img/icons/혼자_활성.png";
import alone_disactive from "../../img/icons/혼자_비활성.png";

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
  padding: 0;
  margin-top: 32px;
  margin-bottom: 18px;
  object-fit: cover;
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
  const selectSecondButtonImg = ({ isSelected, buttonText }) => {
    let activeImage, disactiveImage;
    switch (buttonText) {
      case "어린이":
        activeImage = child_active;
        disactiveImage = child_disactive;
        break;
      case "부모님":
        activeImage = parents_active;
        disactiveImage = parents_disactive;
        break;
      case "친구":
        activeImage = friend_active;
        disactiveImage = friend_disactive;
        break;
      case "애인":
        activeImage = love_active;
        disactiveImage = love_disactive;
        break;
      case "혼자":
        activeImage = alone_active;
        disactiveImage = alone_disactive;
        break;
      default:
        break;
    }

    return isSelected ? activeImage : disactiveImage;
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
          <SecondButtonImg
            src={selectSecondButtonImg({
              isSelected: selectedSecondButton === "어린이",
              buttonText: "어린이",
            })}
          />
          <SecondButtonText>어린이</SecondButtonText>
        </SecondButton>

        <SecondButton
          isSelected={selectedSecondButton === "부모님"}
          disabled={isButtonDisabled && selectedSecondButton !== "부모님"}
          onClick={() => handleButtonClick("부모님")}
        >
          <SecondButtonImg
            src={selectSecondButtonImg({
              isSelected: selectedSecondButton === "부모님",
              buttonText: "부모님",
            })}
          />
          <SecondButtonText>부모님</SecondButtonText>
        </SecondButton>
        <SecondButton
          isSelected={selectedSecondButton === "친구"}
          disabled={isButtonDisabled && selectedSecondButton !== "친구"}
          onClick={() => handleButtonClick("친구")}
        >
          <SecondButtonImg
            src={selectSecondButtonImg({
              isSelected: selectedSecondButton === "친구",
              buttonText: "친구",
            })}
          />
          <SecondButtonText>친구</SecondButtonText>
        </SecondButton>
        <SecondButton
          isSelected={selectedSecondButton === "애인"}
          disabled={isButtonDisabled && selectedSecondButton !== "애인"}
          onClick={() => handleButtonClick("애인")}
        >
          <SecondButtonImg
            src={selectSecondButtonImg({
              isSelected: selectedSecondButton === "애인",
              buttonText: "애인",
            })}
          />
          <SecondButtonText>애인</SecondButtonText>
        </SecondButton>
        <SecondButton
          isSelected={selectedSecondButton === "혼자"}
          disabled={isButtonDisabled && selectedSecondButton !== "혼자"}
          onClick={() => handleButtonClick("혼자")}
        >
          <SecondButtonImg
            src={selectSecondButtonImg({
              isSelected: selectedSecondButton === "혼자",
              buttonText: "혼자",
            })}
          />
          <SecondButtonText>혼자</SecondButtonText>
        </SecondButton>
      </ThirdButtonnBox>
    </ThridContainer>
  );
}

export default ThirdBox;
