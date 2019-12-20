import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1400px 400px;
  grid-template-areas: "containerLeft containerRight";
  background: #1e1d1e;
  padding: 30px;
  margin: 20px;
  border-radius: 5px;
  min-height: 800px;
`;

export const ContainerLeft = styled.div`
  grid-area: containerLeft;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerRight = styled.div`
  grid-area: containerRight;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  span {
    font-size: 100px;
  }

  h1 {
    position: relative;
  }

  div {
    &::after {
      content: "";
      background-color: #424142;
      height: 1.5px;
      min-width: 600px;
      left: 40px;
      position: absolute;
    }
  }
`;
