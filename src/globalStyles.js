import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    outline:0;
    text-decoration: none;
    box-sizing: border-box;
  }  

  body{
    width:100vw;
    height:100vh;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  #root{
    width:100%;
    height:100%;
  }
`;

export default GlobalStyle;