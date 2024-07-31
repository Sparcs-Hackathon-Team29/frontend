import styled from "styled-components";

const Container = styled.div``;
const Box = styled.div`
  position: relative; // 페이지 하단에 고정
  height: -90%;
  width: 100%; // 너비를 화면 전체로 설정
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px; // 푸터의 높이 설정
  padding-top: 30px; // 상단 패딩
  margin-bottom: 0; // 하단 마진 제거
  gap: 16px; // 요소 사이 간격
  z-index: -2; // 다른 요소들이 위에 오도록 z-index 설정
`;

function Footer() {
  return (
    <Container>
      <Box></Box>
    </Container>
  );
}

export default Footer;
