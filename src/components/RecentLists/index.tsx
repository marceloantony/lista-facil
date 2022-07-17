import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { FlatList, TouchableOpacity } from "react-native";
import { CardList } from "../CardList";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Container,
  Header,
  LinkContent,
  LinkText,
  Title,
} from "./styles";

import { ListDataProps } from "../../@types/data-props";

const dataExemple: ListDataProps[] = [
  { id: "1", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "2", title: "Pão de Açucar", date: new Date(), value: 602.25 },
  { id: "3", title: "Carrefour", date: new Date(), value: 202.25 },
  { id: "4", title: "Assaí", date: new Date(), value: 2020.25 },
];

export function RecentLists() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Title>Compras Recentes</Title>
        <TouchableOpacity onPress={() => navigation.navigate("AllLists")}>
          <LinkContent>
            <LinkText>Ver todas</LinkText>
            <Icon name="arrowright" size={RFPercentage(2)} />
          </LinkContent>
        </TouchableOpacity>
      </Header>
      <FlatList
        data={dataExemple}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
      />
    </Container>
  );
}
