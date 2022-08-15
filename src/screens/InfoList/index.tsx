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
  const [allItems, setAllItems] = useState<ItemDataProps[]>([]);
  const [indexItem, setIndexItem] = useState(0);
  const [allLists, setAllLists] = useState<ListDataProps[]>([]);
  const [indexList, setIndexList] = useState(0);
  const [title, setTitle] = useState("");

  const fetchInfoList = async () => {
    const response = await getItem();
    const data: ListDataProps[] = response ? JSON.parse(response) : [];
    const list = data.filter((d, cont) => {
      if (d.id === idList) {
        setIndexList(cont);
        return true;
      }
    })[0];

    setAllLists(data);
    setTitle(list.title === "<Sem Nome>" ? "" : list.title);
    setAllItems(list.items);
  };

  const saveTitleList = async () => {
    allLists[indexList] = {
      ...allLists[indexList],
      title: title === "" ? "<Sem Nome>" : title,
    };
    await setItem(JSON.stringify(allLists));
  };

  const updateTotal = async (total: number) => {
    allLists[indexList] = {
      ...allLists[indexList],
      total: total,
    };
    await setItem(JSON.stringify(allLists));
  };

  const deleteItem = async (id: string) => {
    const newItems = allLists[indexList].items.filter((item) => item.id !== id);
    allLists[indexList] = {
      ...allLists[indexList],
      items: newItems,
    };
    setAllItems(newItems);
    await setItem(JSON.stringify(allLists));
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
      <ListCategory items={allItems} deleteItem={(id) => deleteItem(id)} />
      <PageFooterList
        items={allItems}
        getTotal={(total: number) =>
          allLists.length > 0 ? updateTotal(total) : undefined
        }
      />
      <ButtonAddItem
        onPress={() => navigation.navigate("AddItem", { idList })}
      />
    </Conteiner>
  );
}
