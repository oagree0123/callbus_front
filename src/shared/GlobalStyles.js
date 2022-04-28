import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {

  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: 0;
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;  
  }
`;

export default GlobalStyles;
