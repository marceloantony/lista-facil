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

export function RecentLists() {
  return (
    <Container>
      <Header>
        <Title>Compras Recentes</Title>
        <TouchableOpacity>
          <LinkContent>
            <LinkText>Ver todos</LinkText>
            <Icon name="arrowright" size={RFPercentage(2.3)} />
          </LinkContent>
        </TouchableOpacity>
      </Header>
      <CardList/>
      <CardList/>
      <CardList/>
    </Container>
  );
}
