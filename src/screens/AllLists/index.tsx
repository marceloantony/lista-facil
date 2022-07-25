import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CardList } from "../../components";
import { Container, AllList } from "./styles";
import { ListDataProps } from "../../@types/data-props";
import { listsExemple } from "../../data/categories";

export function AllLists(data: ListDataProps) {
  return (
    <Container>
      <AllList
        data={listsExemple}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
      />
    </Container>
  );
}
