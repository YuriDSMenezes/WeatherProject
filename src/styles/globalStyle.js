import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box
}

html, body , #root {
  height: 100%;
}

body {
  background:#171618;
  display:grid;
  grid-template-columns: 1fr 400px;
  grid-template-areas: 
  "left right";
  color: #fff;
  font: 16px 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased !important
}
`;
