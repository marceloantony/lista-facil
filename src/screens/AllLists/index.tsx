import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CardList } from "../../components";
import { Container, AllList } from "./styles";
import { ListDataProps } from "../../@types/data-props";

const dataExemple: ListDataProps[] = [
  { id: "1", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "2", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "3", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "4", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "5", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "6", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "7", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "8", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "9", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "10", title: "Carrefour", date: new Date(), value: 202.25 },
];

export function AllLists(data: ListDataProps) {
  return (
    <Container>
      <AllList
        data={dataExemple}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
      />
    </Container>
  );
}
