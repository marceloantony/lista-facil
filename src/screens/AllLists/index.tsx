import React, { useCallback, useState } from "react";

import { CardList, ListEmpty, PageHeaderList } from "../../components";
import { Container, List } from "./styles";
import { ListDataProps } from "../../@types/data-props";
import { keyAllLists, listsExemple } from "../../data/";
import { useFocusEffect } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { sortListsByTitle } from "../../hooks";

export function AllLists() {
  const { getItem } = useAsyncStorage(keyAllLists);

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
      <PageHeaderList
        titlePage="Todas as Compras"
        // placeholder="Pesquise uma lista aqui..."
      />
      <List
        data={data.sort(sortListsByTitle)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList data={item} />}
        ListEmptyComponent={
          <ListEmpty text="Nenhuma lista foi criada ainda." />
        }
      />
    </Container>
  );
}
