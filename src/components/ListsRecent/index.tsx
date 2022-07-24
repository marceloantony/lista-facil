import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { FlatList, TouchableOpacity } from "react-native";
import { CardList } from "../CardList";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Container,
  GroupButtons,
  Header,
  LinkContent,
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
        <ButtonMenu title="Itens Casa" icon="home" />
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
            <Icon name="arrowright" size={RFPercentage(2)} />
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
