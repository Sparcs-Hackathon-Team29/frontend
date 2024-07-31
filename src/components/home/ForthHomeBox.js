import styled from "styled-components";
import home1 from "../../img/home1.png";
const ForthContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 1722px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 880px;
  gap: 16px;
`;
const ForthLeft = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  background-color: #ccc;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ForthRight = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 224px;
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
const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  height: 64px;
  width: 206px;
  z-index: 1;
  font-weight: 500;
  font-size: 24px;
  color: #1b1b1b;
  border: 1px solid rgba(40, 40, 40, 0.5);
  border-radius: 31.87px;
  margin-top: 10px;
`;

function ForthHomeBox() {
  return (
    <ForthContainer>
      <ForthLeft>
        <Img src={home1} alt="좌측 사진" />
      </ForthLeft>
      <ForthRight>
        <SelectLeft>
          <SelectBox>내 동네</SelectBox>
          <SelectBox>산책</SelectBox>
          <SelectBox>대중교통</SelectBox>
        </SelectLeft>
        <SelectRight>
          <SelectBox>애인</SelectBox>
          <SelectBox>저녁</SelectBox>
          <SelectBox>오후</SelectBox>
        </SelectRight>
      </ForthRight>
    </ForthContainer>
  );
}
export default ForthHomeBox;
