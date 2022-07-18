import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ItemListDataProps } from "../../@types/data-props";
import { ItemList, ValueList } from "../../components";
import {
  Conteiner,
  TituloLista,
  TituloInput,
  IconMarket,
  ButtonAddItem,
  IconButtonAdd,
} from "./styles";

const dataExemple: ItemListDataProps[] = [
  {
    id: "1",
    title: "Leite",
    qtd: 6,
    value: 6.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
  {
    id: "2",
    title: "Leite",
    qtd: 6,
    value: 6.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
  {
    id: "3",
    title: "Leite",
    qtd: 6,
    value: 6.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
  {
    id: "4",
    title: "Leite",
    qtd: 6,
    value: 6.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
  {
    id: "5",
    title: "Leite",
    qtd: 6,
    value: 6.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
  {
    id: "6",
    title: "Leite",
    qtd: 6,
    value: 6.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
  {
    id: "7",
    title: "Leite",
    qtd: 6,
    value: 6.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
  {
    id: "8",
    title: "Leite",
    qtd: 6,
    value: 6.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
  {
    id: "9",
    title: "Leite",
    qtd: 6,
    value: 6.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
  {
    id: "10",
    title: "Requeijão",
    qtd: 2,
    value: 16.69,
    // obs: "Piracanjuba",
    category: "Laticinios",
  },
];

export function InfoList() {
  const [title, setTitle] = useState("Shibata");
  return (
    <Conteiner>
      <TituloLista>
        <TituloInput onChangeText={setTitle} value={title} />
        <IconMarket name="format-list-text" />
      </TituloLista>
      <FlatList
        data={dataExemple}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemList data={item} />}
      />
      <ValueList />
      <ButtonAddItem>
        <IconButtonAdd name="plus" />
      </ButtonAddItem>
    </Conteiner>
  );
}
