import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { FlatList, TouchableOpacity } from "react-native";
import { CardList } from "../CardList";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Container,
  Diviser,
  Header,
  LinkContent,
  LinkText,
  Title,
} from "./styles";

import { ListDataProps } from "../../@types/data-props";
import { listsExemple } from "../../data/categories";

export function ListsRecent() {
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
        data={listsExemple}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
        ItemSeparatorComponent={() => <Diviser />}
      />
    </Container>
  );
}
