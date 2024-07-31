import styled from "styled-components";
const FirstContain = styled.div`
  display: block;
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 100%;
  margin: 20px auto; /* 중앙 정렬 */
  text-align: center; /* 자식 요소 중앙 정렬 */
`;
const FirstMainTitle = styled.div`
  font-family: "WAGURITTF";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  font-size: 96px;
`;
const FirstSubTitle = styled.div`
  padding-top: 20px;
  color: rgba(40, 40, 40, 0.5);
  font-size: 32px;
`;
const HighlightedText = styled.span`
  font-size: 96px;
  font-weight: 400;
  letter-spacing: 4%;
  color: ${(props) => props.color};
`;

function FirstBox() {
  return (
    <FirstContain>
      <FirstMainTitle>7개의 질문을 통해</FirstMainTitle>
      <FirstMainTitle>
        <HighlightedText color="#7135F0">추천 스팟</HighlightedText>을
        알려드릴게요
      </FirstMainTitle>
      <FirstSubTitle>스크롤을 내리며 모든 항목에 답변을 해주세요</FirstSubTitle>
    </FirstContain>
  );
}

export default FirstBox;
