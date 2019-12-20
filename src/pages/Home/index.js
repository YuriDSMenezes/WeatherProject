import React from "react";

import {
  Container,
  ContainerLeft,
  ContainerRight,
  Header,
  Content
} from "./styles";

export default function Home() {
  return (
    <Container>
      <ContainerLeft>
        <Header>
          <div>Weather Project</div>
          <a>link</a>
        </Header>
        <Content>
          <h1>
            <span>14º</span>Graus Celsos Portiolio
          </h1>
          <div>05:28 - Friday , 12 December 2019</div>
        </Content>
      </ContainerLeft>
      <ContainerRight>
        <div>teste</div>
      </ContainerRight>
    </Container>
  );
}
