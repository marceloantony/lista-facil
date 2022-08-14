import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ButtonAddItem,
  ListCategory,
  PageFooterList,
  PageHeaderList,
} from "../../components";
import { itemsExemple } from "../../data/categories";
import { Conteiner } from "./styles";

export function InfoList() {
  const navigation = useNavigation();

  return (
    <Conteiner>
      <PageHeaderList
        title="Lista de Compras"
        placeholder="Nome do mercado aqui..."
      />
      <ListCategory items={itemsExemple} />
      <PageFooterList items={itemsExemple} onPress={navigation.goBack} />
      <ButtonAddItem onPress={() => navigation.navigate("AddItem")} />
    </Conteiner>
  );
}
