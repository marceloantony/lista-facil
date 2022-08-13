import React from "react";
import { Container, Background, IconAdd } from "./styles";

type Props = {
  onPress?: any;
};

export function ButtonAddItem({ onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Background>
        <IconAdd name="basket-plus-outline" />
      </Background>
    </Container>
  );
}
