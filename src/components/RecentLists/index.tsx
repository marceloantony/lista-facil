import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

import { CardList } from "../CardList";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Container,
  Header,
  LinkContent as LinkContent,
  LinkText,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

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
      <CardList />
      <CardList />
      <CardList />
      <CardList />
    </Container>
  );
}
