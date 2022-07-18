import React, { useState } from "react";
import { CategoryList, ValueList } from "../../components";
import { dataExemple } from "../../data/categories";
import {
  Conteiner,
  TituloLista,
  TituloInput,
  IconMarket,
  ButtonAddItem,
  IconButtonAdd,
} from "./styles";

export function InfoList() {
  const [title, setTitle] = useState("Shibata");

  return (
    <Conteiner>
      <TituloLista>
        <TituloInput onChangeText={setTitle} value={title} />
        <IconMarket name="format-list-text" />
      </TituloLista>
      <CategoryList items={dataExemple} />
      <ValueList />
      <ButtonAddItem>
        <IconButtonAdd name="plus" />
      </ButtonAddItem>
    </Conteiner>
  );
}
