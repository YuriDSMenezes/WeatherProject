import styled from 'styled-components'

export const Container = styled.div`
  grid-area: containerLeft;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;

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
      color:#fff;
  }

  input::placeholder {
      color:#fff;
      text-align: center;
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