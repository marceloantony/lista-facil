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

import { sortListsByDate } from "../../hooks";
import { GroupButtonsMenu } from "../GroupButtonsMenu";
import { ListEmpty } from "../ListEmpty";
import { ListDataProps } from "../../@types/data-props";

type Props = {
  allLists: ListDataProps[];
};
export function ListsRecent({ allLists }: Props) {
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
        data={allLists.slice(-5).sort(sortListsByDate)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
        ListEmptyComponent={
          <ListEmpty text="Nenhuma lista foi criada ainda." />
        }
      />
    </Container>
  );
}
