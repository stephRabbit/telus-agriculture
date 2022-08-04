import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #0072ce;
    --grey: #a7adb1;
    --grey-text: #303e47;
    --grey-dark: #707070;
    --grey-medium: #8d9599;
    --grey-light: #dadcde;
    --grey-lighter: rgba(112, 112, 112, .5);
    --white: #ffffff;
  }

  ::-webkit-input-placeholder { 
    color: var(--grey-lighter);
  }
  ::-moz-placeholder {
     color: var(--grey-lighter);
  }

  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: var(--white);
    color: var(--grey-text);
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
`
