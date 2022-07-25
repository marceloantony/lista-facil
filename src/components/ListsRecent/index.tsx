import React from "react";
import { useNavigation } from "@react-navigation/native";

import { FlatList, TouchableOpacity } from "react-native";
import { CardList } from "../CardList";
import {
  Container,
  Header,
  LinkContent,
  LinkIcon,
  LinkText,
  Title,
} from "./styles";

import { listsExemple } from "../../data/categories";
import { GroupButtonsMenu } from "../GroupButtonsMenu";

export function ListsRecent() {
  const navigation = useNavigation();

  return (
    <Container>
      <GroupButtonsMenu />
      <Header>
        <Title>Compras Recentes</Title>
        <TouchableOpacity onPress={() => navigation.navigate("AllLists")}>
          <LinkContent>
            <LinkText>Ver todas</LinkText>
            <LinkIcon name="arrowright" />
          </LinkContent>
        </TouchableOpacity>
      </Header>
      <FlatList
        data={listsExemple
          .slice(-5)
          .sort((a, b) => parseInt(b.id) - parseInt(a.id))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
      />
    </Container>
  );
}
