import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 600px;
  grid-template-areas: "containerLeft containerRight";
  background: #1e1d1e;
  margin: 20px;
  border-radius: 5px;
  min-height: 800px;
`;

// parte esquerda da tela

export const ContainerLeft = styled.div`
  grid-area: containerLeft;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button{
        width: 100px;
        padding: 10px;
        color: #fff;
        background: #1e1d1e;
        border: 1px solid #7d7d7d;
        font-weight: bold;
        letter-spacing: 1px;
        align-self: center;
    }

    button:hover {
        background: #444040
    }

`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px;

  input {
      border: none;
      height:37px;
      background: #1e1d1e;
      border: 1px solid #7d7d7d;
      text-align: center;
  }

  input::placeholder {
      color:#fff;
      text-align: center;
      font-family: 'Roboto';
  }

  input:focus {
      color:#fff;
  }
`;

export const Content = styled.div`
    padding:20px;

  span {
    font-size: 200px;
  }

  h1 {
    padding-bottom: 90px;
  }

  div{
      position: relative;
  }

  div {
    &::after {
      content: "";
      background-color: #424142;
      height: 1.5px;
      min-width: 600px;
      left:0;
      position: absolute;
      top: -50px;
    }
  }
`;

// Parte direta da tela

export const ContainerRight = styled.div`
  grid-area: containerRight;
  border-left: 1px solid #7d7d7d;
`;

export const PieceContainer = styled.div` 
padding: 20px;
&:nth-child(1)
 {
    line-height:40px;
 }
 div {
    display:flex;
    justify-content: space-between;
    align-itens: center;
 }

  & + div {
      margin-top: 30px;
      border-top: 1px solid #7d7d7d;

      div:nth-child(1){
          margin-top: 20px
        margin-bottom: 30px;
      }
  }

  div h3 {
      color: #7d7d7d;
      height: 40px;
  }

  li {
      list-style:none;
      color:#7d7d7d;
      &+li {
          margin-top: 20px;
      }
  }

 


`