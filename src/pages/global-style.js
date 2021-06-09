import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: grey;
}

body{
    background: #F8F8F8;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    font-size: 15px;
    line-height: 1.867em;
}

`;

export default GlobalStyle;
