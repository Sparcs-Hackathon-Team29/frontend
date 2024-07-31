import styled from "styled-components";

import ticket1 from "../../img/ticket1.png";
import ticket2 from "../../img/ticket2.png";
import ticket3 from "../../img/ticket3.png";
const SecondContain = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  top: 1250px;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 20px auto; /* 중앙 정렬 */
  text-align: center; /* 자식 요소 중앙 정렬 */
`;

const TitleFont = styled.div`
  font-size: 48px;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 72px;
  font-weight: 600;
  color: #000000;
  width: 100%;
  position: relative;
  z-index: 1;
`;
const SecondBot = styled.div`
  display: flex;
  gap: 16px;
  width: 1316px;
  justify-content: center;
  margin: 0 auto;
`;
const TicketContainer = styled.div`
  position: relative;
  width: 428px;
  height: 466px;
  border-radius: 28px;
  margin: 0 auto; /* 가로 중앙 정렬 */
`;
const TicketImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TopText = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: ${(props) => props.color || "#ffffff"};
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  white-space: pre-line; /* 줄바꿈을 인식하게 하는 속성 */
  line-height: 32px; /* 24px 폰트 크기 + 8px 줄간 간격 */
`;

const BottomTextContain = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const BottomT = styled.div`
  font-family: "WAGURITTF";
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  margin-bottom: 15px;
`;
const BottomB = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
`;

function SecondHomeBox() {
  return (
    <SecondContain>
      <TitleFont>'어디 갈래?' 라는 고민 해보시지 않으셨나요?</TitleFont>
      <SecondBot>
        <TicketContainer>
          <TicketImage src={ticket1} alt="ticket" />
          <TopText color="#000000">
            {"'여름방학 시작!\n이제 또 뭐하지???\nㅎㅎ 계획 없음'"}
          </TopText>
          <BottomTextContain>
            <BottomT>강지은</BottomT>
            <BottomB>17세 고등학생</BottomB>
          </BottomTextContain>
        </TicketContainer>
        <TicketContainer>
          <TicketImage src={ticket2} alt="ticket" />
          <TopText>
            {
              "'햇살 좋아서 어디든 가고 싶은데...\n그렇다고 멀리 가기는 피곤하고'"
            }
          </TopText>
          <BottomTextContain>
            <BottomT>윤재호</BottomT>
            <BottomB>22세 디자이너</BottomB>
          </BottomTextContain>
        </TicketContainer>
        <TicketContainer>
          <TicketImage src={ticket3} alt="ticket" />
          <TopText>
            {
              "'막상 아이들이랑 나가려고 하니\n마땅히 갈만한 곳이 생각이 안나요'"
            }
          </TopText>
          <BottomTextContain>
            <BottomT>이수진</BottomT>
            <BottomB>35세 쌍둥이 엄마</BottomB>
          </BottomTextContain>
        </TicketContainer>
      </SecondBot>
    </SecondContain>
  );
}
export default SecondHomeBox;
