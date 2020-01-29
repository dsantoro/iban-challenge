import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
  html, body {
    font-family: 'Roboto', cursive;
    background-color: #fafafa;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a:link,
  a:visited,
  a:active {
    color: #385586;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;