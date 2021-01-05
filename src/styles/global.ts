import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {margin: 0; padding: 0; box-sizing: border-box; outline: none; }

  body {
    background: #f0f0f5;
  }

  body, input, button, select, option {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;
