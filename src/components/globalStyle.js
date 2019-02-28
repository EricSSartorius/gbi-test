import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    min-height: 0;
    min-width: 0;
  }

  html {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
`;

export default GlobalStyle;
