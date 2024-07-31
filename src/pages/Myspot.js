import styled from "styled-components";
import FirstMyspotBox from "../components/mymade/FirstMyspotBox";
import SpotBar from "../components/mymade/SpotBar";

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
function Myspot() {
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
        <SpotBar />
        <SpotBar />
      </ContentContainer>
    </Container>
  );
}

export default Myspot;
