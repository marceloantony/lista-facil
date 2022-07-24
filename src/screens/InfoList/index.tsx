import React, { useState } from "react";
import { ListCategory, ListTotalValue } from "../../components";
import { itemsExemple } from "../../data/categories";
import light from "../../themes/light";
import {
  Conteiner,
  TituloLista,
  TituloInput,
  IconEditTitle,
  ButtonAddItem,
  IconButtonAdd,
} from "./styles";

export function InfoList() {
  const [title, setTitle] = useState("");

  return (
    <Conteiner>
      <TituloLista>
        <TituloInput
          placeholder="Nome do mercado aqui..."
          placeholderTextColor={`${light.COLORS.TEXT_ALT}A0`}
          onChangeText={setTitle}
          value={title}
        />
        <IconEditTitle name="edit" />
      </TituloLista>
      <ListCategory items={itemsExemple} />
      <ListTotalValue items={itemsExemple} />
      <ButtonAddItem>
        <IconButtonAdd name="plus" />
      </ButtonAddItem>
    </Conteiner>
  );
}
