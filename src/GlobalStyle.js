import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'WAGURITTF';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Pretendard-Regular';
  }
`;

export default GlobalStyle;
