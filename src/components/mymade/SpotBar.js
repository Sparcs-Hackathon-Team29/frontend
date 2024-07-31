import styled from "styled-components";

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
  background-color: #f0f0f0;
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
  background-color: #ccc;
  border-radius: 8px;
  margin-right: 16px;
`;

const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextItem = styled.div`
  color: black;
  margin-bottom: 8px;
`;

const Button = styled.button`
  background-color: #20fb7c;
  color: #1c1e1b;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin-left: 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

function SpotBar() {
  return (
    <FirstContain>
      <LeftPart>
        <CircleNumber>1</CircleNumber>
        <SquareBox />
        <TextContainer>
          <TextItem>Text 1</TextItem>
          <TextItem>Text 2</TextItem>
        </TextContainer>
      </LeftPart>
      <RightPart>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
      </RightPart>
    </FirstContain>
  );
}

export default SpotBar;
