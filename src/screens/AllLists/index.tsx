import React from "react";

import { CardList, PageHeaderList } from "../../components";
import { Container, List } from "./styles";
import { ListDataProps } from "../../@types/data-props";
import { listsExemple } from "../../data/categories";

export function AllLists(data: ListDataProps) {
  return (
    <Container>
      <PageHeaderList
        title="Todas as Compras"
        placeholder="Pesquise uma lista aqui..."
      />
      <List
        data={listsExemple}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
      />
    </Container>
  );
}
