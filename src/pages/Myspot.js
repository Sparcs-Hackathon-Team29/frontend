import styled from "styled-components";
import { useEffect } from "react";
import FirstMyspotBox from "../components/mymade/FirstMyspotBox";
import SpotBar from "../components/mymade/SpotBar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import footing from "../img/foooteer.png";
import axios from "axios";
import img1 from "../img/imgbox/다운로드.gif";
import img2 from "../img/imgbox/다운로드.jpg";
import img3 from "../img/imgbox/다운로드 (1).jpg";
import img4 from "../img/imgbox/다운로드 (2).jpg";
const Container = styled.div`
  display: block;
  height: 100vh;
  position: relative;
`;

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  z-index: 0;
  gap: 16px;
`;

const Line = styled.div`
  width: 206px;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.1);

  &:last-child {
    margin-right: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 0px; /* 간격을 제거 */
  margin-top: 150px;
`;

const BarBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* SpotBar 사이의 간격을 10px로 명시적으로 설정 */
`;
const ContainBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 50px auto; /* 중앙 정렬 */
  width: 100%;
  gap: 16px;
`;
const Button = styled.button`
  height: 64px;
  width: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: ${(props) => props.border || "none"};
  border-radius: 31.87px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.color || "#F0F0F0"};
  background-color: ${(props) => props.backgroundColor || "#F0F0F0"};
  cursor: pointer;
`;

const FootBackgroundImage = styled.img`
  position: relative;
  width: 100%;
  background: #ccc;
  margin-top: 5%;
  width: 100%; // 너비를 화면 전체로 설정
  object-fit: cover; // 이미지가 컨테이너를 꽉 채우도록 설정
  z-index: -2; // 다른 요소들이 위에 오도록 z-index 설정
`;

function Myspot() {
  const navigate = useNavigate();
  const goToMaking = () => {
    navigate("/make");
  };
  // const handleSubmit = async () => {
  //   try {
  //     const idresponse = await axios.get(
  //       `https://3763-106-101-130-32.ngrok-free.app/userId`,
  //       {
  //         headers: {
  //           access: localStorage.getItem("access"), // 로컬 스토리지에서 토큰 가져오기
  //         },
  //       }
  //     );
  //     console.log("id data:", idresponse.data); // 성공적인 응답 로깅
  //     try {
  //       const resultresponse = await axios.get(
  //         `https://3763-106-101-130-32.ngrok-free.app/api/recommend/${idresponse} `,
  //         {
  //           headers: {
  //             access: localStorage.getItem("access"), // 로컬 스토리지에서 토큰 가져오기
  //           },
  //         }
  //       );
  //       // console.log("result page data:", resultresponse); // 성공적인 응답 로깅
  //     } catch (error) {
  //       console.error("recommend 요청 중 오류가 발생했습니다:", error); // 에러 객체 로깅
  //     }
  //   } catch (error) {
  //     console.error("userId 요청 중 오류가 발생했습니다:", error); // 에러 객체 로깅
  //   }
  // };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <Container>
      {/* {<LineContainer>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </LineContainer>} */}
      <ContentContainer>
        <FirstMyspotBox />
        <SpotBar
          number="1"
          text1="경복궁 야간 개장"
          text2="서울 종로구 사직로 161 경복궁"
          img={img1}
        />
        <SpotBar
          number="2"
          text1="서촌 마을"
          text2="서울 종로구 자하문로 7길 21-4"
          img={img2}
        />
        <SpotBar
          number="3"
          text1="대림 미술관"
          text2="서울 종로구 자하문로 4길 21 대림미술관"
          img={img3}
        />
        <SpotBar
          number="4"
          text1="미술관 옆 돈까스"
          text2="서울 종로구 율곡로3길 83 미술관옆돈까스"
          img={img4}
        />
      </ContentContainer>
      <ContainBox>
        <Button color="#FFFFFF" backgroundColor="#1B1B1B" onClick={goToMaking}>
          카테고리 재선택
        </Button>
        <Button
          color="#1B1B1B"
          backgroundColor="#20FB7C"
          border="1px solid rgba(40,40,40,0.5)"
        >
          내 스팟으로 저장
        </Button>
      </ContainBox>
      <FootBackgroundImage src={footing} alt="푸우우우우터" />
    </Container>
  );
}

export default Myspot;
