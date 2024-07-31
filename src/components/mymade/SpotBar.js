import styled from "styled-components";
import { useState } from "react";

import goodimg_active from "../../img/icons/좋아요_활성.png";
import goodimg_disactive from "../../img/icons/좋아요_비활성.png";
import link_active from "../../img/icons/링크복사.png";
import visit_active from "../../img/icons/사이트_방문.png";
import delete_active from "../../img/icons/제거.png";

const Container = styled.div`
  display: block;
  height: 100vh;
  position: relative;
`;

const FirstContain = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  margin: 20px auto;
  text-align: left;
  width: 1316px;
  height: 102px;

  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const RightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;

const CircleNumber = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const SquareBox = styled.div`
  width: 102px;
  height: 102px;
  border-radius: 8px;
  margin-right: 16px;
`;
const SquareImg = styled.img`
  border-radius: 8px;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TItleText = styled.div`
  color: #1b1b1b;
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const SubText = styled.div`
  color: rgba(27, 27, 27, 0.6);
  font-weight: 400;
  font-size: 20px;
`;

//**우측 */
const Button = styled.button`
  height: 92px;
  width: 92px;
  flex-direction: column;
  align-items: center;
  border: none;
  margin-left: 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
`;

const EmotionButton = styled.button`
  height: 92px;
  width: 92px;

  flex-direction: column;
  align-items: center;
  border: none;
  margin-left: 16px;
  font-size: 16px;
  color: ${(props) => (props.isSelected ? "#FBFBFB" : "#1B1B1B")};

  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const ButtonImg = styled.img`
  height: 32px;
  width: 32px;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const ButtonText = styled.div`
  height: 24px;
  width: 80px;
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  color: #000000;

  margin-bottom: 25px;
`;

function SpotBar({ number, text1, text2, img }) {
  const [selectedThirdButton, setThirdSelectedButton] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const handleButtonClick = (buttonText) => {
    if (selectedThirdButton === buttonText) {
      setThirdSelectedButton(null);
      setIsButtonDisabled(false);
    } else {
      setThirdSelectedButton(buttonText);
      setIsButtonDisabled(true);
      // setThirdfeedback(buttonText);
    }
  };

  return (
    <FirstContain>
      <LeftPart>
        <CircleNumber>{number}</CircleNumber>
        <SquareBox>
          <SquareImg src={img} alt="사진" />
        </SquareBox>
        <TextContainer>
          <TItleText>{text1}</TItleText>
          <SubText>{text2}</SubText>
        </TextContainer>
      </LeftPart>
      <RightPart>
        <Button onClick={toggleLike}>
          <ButtonImg src={isLiked ? goodimg_active : goodimg_disactive} />
          <ButtonText>좋아요</ButtonText>
        </Button>
        <Button>
          <ButtonImg src={link_active} />
          <ButtonText>링크복사</ButtonText>
        </Button>
        <Button>
          <ButtonImg src={visit_active} />
          <ButtonText>사이트 방문</ButtonText>
        </Button>
        <Button>
          <ButtonImg src={delete_active} />
          <ButtonText>삭제</ButtonText>
        </Button>
      </RightPart>
    </FirstContain>
  );
}

export default SpotBar;
