import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "containerLeft containerRight";
  background: #1e1d1e;
  margin: 20px;
  border-radius: 5px;
  min-height: 800px;
  display:flex;
  justify-content: center;
  align-itens: center;
`;

// parte esquerda da tela

export const ContainerLeft = styled.div`
  grid-area: containerLeft;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px;
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
  margin-left: 80px;
  border-left: 1px solid #7d7d7d;
  height: 100%;
`;

export const PieceContainer = styled.div` 
padding: 20px;
&:nth-child(1)
 {
    line-height:40px;

    button{
        width: 100px;
        padding: 10px;
        color: #fff;
        background: #1e1d1e;
        border: 1px solid #7d7d7d;
        font-weight: bold;
        letter-spacing: 1px;
    }
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
          margin-top: 30px
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