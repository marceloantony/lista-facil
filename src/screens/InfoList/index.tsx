import React, { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import {
  ButtonAddItem,
  ListCategory,
  PageFooterList,
  PageHeaderList,
} from "../../components";
import { Conteiner } from "./styles";
import { keyAllLists } from "../../data/";
import {
  InfoListPageProps,
  ItemDataProps,
  ListDataProps,
} from "../../@types/data-props";

export function InfoList() {
  const navigation = useNavigation();
  const { getItem, setItem } = useAsyncStorage(keyAllLists);

  const { idList } = useRoute().params as InfoListPageProps;
  const [items, setItems] = useState<ItemDataProps[]>([]);
  const [lists, setLists] = useState<ListDataProps[]>([]);
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState("");

  const fetchInfoList = async () => {
    const response = await getItem();
    const data: ListDataProps[] = response ? JSON.parse(response) : [];

    const list = data.filter((d, cont) => {
      if (d.id === idList) {
        setIndex(cont);
        return true;
      }
    })[0];

    setLists(data);
    setTitle(list.title === "<Sem Nome>" ? "" : list.title);
    setItems(list.items);
  };

  const saveTitleList = async () => {
    lists[index] = {
      ...lists[index],
      title: title === "" ? "<Sem Nome>" : title,
    };
    await setItem(JSON.stringify(lists));
  };

  useFocusEffect(
    useCallback(() => {
      fetchInfoList();
    }, [])
  );

  return (
    <Conteiner>
      <PageHeaderList
        titlePage="Lista de Compras"
        placeholder="Nome do mercado aqui..."
        inputText={title}
        handleText={setTitle}
        onEndEditing={saveTitleList}
      />
      <ListCategory items={items} />
      <PageFooterList items={items} onPress={navigation.goBack} />
      <ButtonAddItem
        onPress={() => navigation.navigate("AddItem", { idList })}
      />
    </Conteiner>
  );
}
