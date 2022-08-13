import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ListCategory, PageFooterList, PageHeaderList } from "../../components";
import { ButtonAddItem } from "../../components/ButtonAddItem";
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
      <PageFooterList items={itemsExemple} />
      <ButtonAddItem onPress={() => navigation.navigate("AddItem")} />
    </Conteiner>
  );
}
