import React from "react";
import {
  Container,
  Background,
  IconAdd,
} from "./styles";

export function ButtonAddItem() {
  return (
    <Container>
      <Background>
        <IconAdd name="plus" />
      </Background>
    </Container>
  );
}
