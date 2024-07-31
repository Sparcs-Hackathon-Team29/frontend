import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import footing from "../img/foooteer.png";
import map from "../img/map.png";
const Container = styled.div`
  display: block;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 72px auto;
  text-align: center;
`;
const TheBox = styled.div`
  height: 100px;
  width: 100%;
`;
const Title = styled.div`
  color: #1b1b1b;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const SubTitle = styled.div`
  color: rgba(40, 40, 40, 0.5);
  font-size: 32px;
  font-weight: 500;
`;

const InputForm = styled.input`
  border: 1.5px solid rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.hasInput ? "#000" : "#fbfbfb")};
  color: ${(props) => (props.hasInput ? "#fff" : "#000")};
  border-radius: 50px;
  width: 852px;
  height: 60px;
  margin-top: 50px;
  padding-left: 120px;
  font-size: 20px;

  &::placeholder {
    color: #808080;
  }

  &:active {
    outline: none;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 280px;
  left: 500px;
  height: 24px;
  width: 24px;
  background-color: #ccc;
  color: ${(props) => (props.hasInput ? "#20FB7C" : "#000000")};
`;
const BottomBox = styled.div`
  display: block;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
`;
const MapimgContainer = styled.div`
  position: relative;
  width: 246px;
  height: 246px;
  border: none;
  border-radius: 16px;
  background-color: #ccc;
  margin: 0 auto; /* 가로 중앙 정렬 */
  margin-top: 70px;
`;
const MapimgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
`;
const NavButton = styled.button`
  height: 64px;
  width: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  border-radius: 31.87px;
  font-size: 20px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#FBFBFB" : "#1B1B1B")};
  background-color: ${(props) =>
    props.disabled ? "rgba(136,136,136,0.5)" : "#20FB7C"};
  border: ${(props) =>
    props.disabled ? "none" : "1px solid rgba(40,40,40,0.5)"};
`;

const FootBackgroundImage = styled.img`
  position: relative;
  width: 100%;
  background: #ccc;

  object-fit: cover; // 이미지가 컨테이너를 꽉 채우도록 설정
  z-index: -2; // 다른 요소들이 위에 오도록 z-index 설정
`;

function RandomMaking() {
  const [randomfeedback, setRandomfeedback] = useState("");
  const [hasInput, setHasInput] = useState(false); // 입력 여부를 추적하는 상태
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value.trim(); // 입력값에서 앞뒤 공백을 제거
    setHasInput(value !== ""); // 입력값이 비어있지 않다면 true
    setRandomfeedback(value);
  };

  function handleClick() {
    if (hasInput) {
      // 입력이 있을 때만 navigate 실행
      navigate("/loading2");
    }
  }

  return (
    <div>
      <Container>
        <TheBox />
        <Title>선택한 지역 중심으로 추천 장소를 찾아드릴게요</Title>
        <SubTitle>원하시는 지하철역이나 주소를 입력해주세요</SubTitle>

        <Icon hasInput={hasInput} />
        <InputForm
          placeholder="가고 싶은 곳의 역, 주변 명소의 이름을 적어 주세요. ex 혜화역, 롯데타워"
          onChange={handleInputChange}
          hasInput={hasInput}
        />
        <BottomBox>
          <MapimgContainer>
            <MapimgImage src={map} alt="지도모양" />
          </MapimgContainer>
          <NavButton onClick={handleClick} disabled={!hasInput}>
            랜덤 스팟 생성
          </NavButton>
        </BottomBox>
      </Container>
      <FootBackgroundImage src={footing} alt="푸우우우우터" />
    </div>
  );
}
export default RandomMaking;
