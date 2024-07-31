import styled from "styled-components";

const FirstContain = styled.div`
  display: block;
  position: absolute;
  top: 700px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  margin: 20px auto; /* 중앙 정렬 */
  text-align: center; /* 자식 요소 중앙 정렬 */
`;
const FirstContainBot = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin: 20px auto; /* 중앙 정렬 */
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
`;

function FirstHomeBox() {
  return (
    <FirstContain>
      <FirstContainBot>
        <Button color="#ffffff" backgroundColor="#000000">
          AI로 자동 생성
        </Button>
        <Button
          color="#000000"
          backgroundColor="#FBFBFB"
          border="1px solid rgba(40,40,40,0.5)"
        >
          AI 행선지 추천
        </Button>
      </FirstContainBot>
    </FirstContain>
  );
}
export default FirstHomeBox;
