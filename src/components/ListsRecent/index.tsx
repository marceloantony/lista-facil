import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

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

import { ListDataProps } from "../../@types/data-props";
import { keyAllLists, listsExemple } from "../../data/";
import { sortByDate } from "../../hooks";
import { GroupButtonsMenu } from "../GroupButtonsMenu";
import { ListEmpty } from "../ListEmpty";

export function ListsRecent() {
  const { getItem } = useAsyncStorage(keyAllLists);
  const navigation = useNavigation();

  const [data, setData] = useState<ListDataProps[]>([]);

  const fetchLists = async () => {
    const response = await getItem();
    setData(response ? JSON.parse(response) : []);
  }

  useFocusEffect(
    useCallback(() => {
      fetchLists();
    }, [])
  );

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
        data={data.slice(-5).sort(sortByDate)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
        ListEmptyComponent={<ListEmpty text="Nenhuma lista foi criada ainda." />}
      />
    </Container>
  );
}
