import styled from "styled-components";
const SixthContainer = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  top: 2300px;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 20px auto;
  text-align: center;
`;
const SixthTopBoxContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 50%;
  margin-bottom: 16px;
  transform: translate(-50%, 0%);
  height: 428px;
  width: 100%;
  gap: 16px;
  background-color: #ccc;
`;
const SixthBotBoxContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 428px;
  width: 100%;
  gap: 16px;
  background-color: #ccc;
`;
const TitleFont = styled.div`
  font-size: 48px;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 80px;
  font-weight: 600;
  color: #000000;
  width: 100%;
  position: relative;
  z-index: 1;
`;
const TopSliceBox = styled.div`
  height: 428px;
  width: 286px;
  background-color: #ddd;
`;
const BottomSliceBox = styled.div`
  height: 428px;
  width: 64px;
  background-color: #ddd;
`;
const NomalBox = styled.div`
  height: 428px;
  width: 428px;
  background-color: #ddd;
`;
function SixHomeBox() {
  return (
    <SixthContainer>
      <TitleFont>아니면 새로운 곳을 도전해보시는 건 어떤가요?</TitleFont>
      <SixthTopBoxContainer>
        <TopSliceBox></TopSliceBox>
        <NomalBox></NomalBox>
        <NomalBox></NomalBox>
        <NomalBox></NomalBox>
        <TopSliceBox></TopSliceBox>
      </SixthTopBoxContainer>
      <SixthBotBoxContainer>
        <BottomSliceBox></BottomSliceBox>
        <NomalBox></NomalBox>
        <NomalBox></NomalBox>
        <NomalBox></NomalBox>
        <NomalBox></NomalBox>
        <BottomSliceBox></BottomSliceBox>
      </SixthBotBoxContainer>
    </SixthContainer>
  );
}

export default SixHomeBox;
