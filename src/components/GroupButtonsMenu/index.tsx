import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import { Container } from "./styles";
import { ButtonMenu } from "../ButtonMenu";
import { ListDataProps } from "../../@types/data-props";
import { keyAllLists } from "../../data";

export function GroupButtonsMenu() {
  const { setItem, getItem } = useAsyncStorage(keyAllLists);
  const navigation = useNavigation();

  async function createList() {
    const id = uuid.v4().toString();
    const newList: ListDataProps = {
      id,
      title: "",
      date: new Date().toString(),
      value: 0,
      items: [],
    };

    const respData = await getItem();
    const prevData = respData ? JSON.parse(respData) : [];
    const result = [...prevData, newList];

    await setItem(JSON.stringify(result));

    navigation.navigate("InfoList", { idList: id });
  }

  function openScreen() {
    navigation.navigate("screenB", { name: "Em Breve. CALMA!" });
  }

  return (
    <Container>
      <ButtonMenu
        title="Itens Casa"
        icon="home"
        onPress={() => navigation.navigate("ListHome")}
      />
      <ButtonMenu title="Criar Lista" icon="plus" onPress={createList} />
      <ButtonMenu title="Em Breve" icon="question" onPress={openScreen} />
      {/* <ButtonMenu title="Tema Claro" icon="sun" /> */}
      {/* <ButtonMenu title="Tema Escuro" icon="moon" /> */}
    </Container>
  );
}
