import styled from "styled-components";
import LongTicket from "../components/mydata/LongTicket";
import ticket from "../img/longticket.png";
import Smallticket from "../components/mydata/SmallTicket";
import footing from "../img/foooteer.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const FontContain = styled.div`
  width: 1316px;
  margin-top: 150px;
  margin-bottom: 50px;
  align-items: start;
  display: block;
  text-align: left;
`;
const BottomT = styled.div`
  font-family: "WAGURITTF";
  font-weight: normal;
  font-style: normal;
  font-size: 72px;
  margin-bottom: 15px;
`;
const BottomB = styled.div`
  font-size: 24px;
  width: 500;
  color: rgba(27, 27, 27, 0.6);
`;
const SmallticketBox = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 1800px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const SelectLeft = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
`;
const SelectRight = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
`;

const SmallImg = styled.div`
  display: flex;
  width: 650px;
  justify-content: center;
  margin: 36px auto;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const FootBackgroundImage = styled.img`
  position: relative;
  background: #ccc;
  margin-top: 10%;
  width: 100%; // 너비를 화면 전체로 설정
  object-fit: cover; // 이미지가 컨테이너를 꽉 채우도록 설정
  z-index: -2; // 다른 요소들이 위에 오도록 z-index 설정
`;

function Mypage() {
  return (
    <Container>
      <FontContain>
        <BottomT>나의 스팟 보관함</BottomT>
        <BottomB>내가 고른 스팟들을 다시 확인해봐요</BottomB>
      </FontContain>
      <LongTicket />
      <LongTicket />
      <LongTicket />
      <SmallticketBox>
        <SelectLeft>
          <SmallImg>
            <Smallticket />
          </SmallImg>
          <SmallImg>
            <Smallticket />
          </SmallImg>
        </SelectLeft>
        <SelectRight>
          <SmallImg>
            <Smallticket />
          </SmallImg>
          <SmallImg>
            <Smallticket />
          </SmallImg>
        </SelectRight>
      </SmallticketBox>
      <FootBackgroundImage src={footing} alt="푸우우우우터" />
    </Container>
  );
}
export default Mypage;
