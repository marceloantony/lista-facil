import React from "react";
import { ListCategory, PageFooterList, PageHeaderList } from "../../components";
import { ButtonAddItem } from "../../components/ButtonAddItem";
import { itemsExemple } from "../../data/categories";
import { Conteiner } from "./styles";

export function InfoList() {
  return (
    <Conteiner>
      <PageHeaderList />
      <ListCategory items={itemsExemple} />
      <PageFooterList items={itemsExemple} />
      <ButtonAddItem />
    </Conteiner>
  );
}
