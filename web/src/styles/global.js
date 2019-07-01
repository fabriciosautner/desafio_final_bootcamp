import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #FFF;
    font-family: 'Helvetica', sans-serif;
    color: #0b2031;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
