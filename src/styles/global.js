import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  display: flex;
  align-items:center;
  justify-content:center;
  height: 100%;
}

body {
  background:#171618;
  -webkit-font-smoothing: antialiased;
  color:#fff;
}

body,
input,
button {
  font-family: Roboto, sans-serif;
}
`;
