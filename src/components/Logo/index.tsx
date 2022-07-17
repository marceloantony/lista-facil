import React from "react";
import { Container, IconLogo, Title } from "./styles";

export function Logo() {
  return (
    <Container>
      <IconLogo
        source={require("../../assets/marketCar.png")}
        resizeMode="contain"
      />
      <Title>Lista Fácil</Title>
    </Container>
  );
}
