import React from "react";
import { ListCategory, PageHeaderList } from "../../components";
import { itemsExemple } from "../../data/categories";
import { Container } from "./styles";

export function ListHome() {
  return (
    <Container>
      <PageHeaderList
        title="Itens em Casa"
        placeholder="Pesquise um item aqui..."
      />
      <ListCategory items={itemsExemple} />
    </Container>
  );
}
