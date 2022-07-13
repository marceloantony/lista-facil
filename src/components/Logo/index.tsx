import React from "react";
import { Container, Icon, Title } from "./styles";

export function Logo() {
  return (
    <Container>
      <Icon
        source={require("../../assets/marketCar.png")}
        resizeMode="contain"
      />
      <Title>Lista Fácil</Title>
    </Container>
  );
}
