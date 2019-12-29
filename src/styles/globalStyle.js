import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box
  textarea:focus,
    input:focus,
    select:focus,
    button:focus {
    border-color: none !important;
    outline: 0;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}

body {
  background:#171618;
  color: #fff;
  font: 16px 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased !important
}
`;
