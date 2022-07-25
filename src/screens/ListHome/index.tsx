import React from "react";
import { ListCategory } from "../../components";
import { itemsExemple } from "../../data/categories";
import { Container } from "./styles";

export function ListHome() {
  return <Container>
      <ListCategory items={itemsExemple} />
  </Container>;
}
