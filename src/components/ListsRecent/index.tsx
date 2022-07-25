import React from "react";
import { useNavigation } from "@react-navigation/native";

import { FlatList, TouchableOpacity } from "react-native";
import { CardList } from "../CardList";
import {
  Container,
  GroupButtons,
  Header,
  LinkContent,
  LinkIcon,
  LinkText,
  Title,
} from "./styles";

import { listsExemple } from "../../data/categories";
import { ButtonMenu } from "../ButtonMenu";

export function ListsRecent() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("screenB", { name: "Em Breve. CALMA!" });
  }

  return (
    <Container>
      <GroupButtons>
        <ButtonMenu
          title="Itens Casa"
          icon="home"
          onPress={() => navigation.navigate("ListHome")}
        />
        <ButtonMenu
          title="Criar Lista"
          icon="plus"
          onPress={() => navigation.navigate("InfoList")}
        />
        <ButtonMenu title="Em Breve" icon="question" onPress={openScreen} />
        {/* <ButtonMenu title="Tema Claro" icon="sun" /> */}
        {/* <ButtonMenu title="Tema Escuro" icon="moon" /> */}
      </GroupButtons>
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
        data={listsExemple}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
      />
    </Container>
  );
}
