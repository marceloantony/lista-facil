import React, { useState } from "react";
import { CategoryList, ValueList } from "../../components";
import { itemsExemple } from "../../data/categories";
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
      <CategoryList items={itemsExemple} />
      <ValueList items={itemsExemple} />
      <ButtonAddItem>
        <IconButtonAdd name="plus" />
      </ButtonAddItem>
    </Conteiner>
  );
}
