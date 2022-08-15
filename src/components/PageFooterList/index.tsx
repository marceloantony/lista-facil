import React from "react";
import { ItemDataProps } from "../../@types/data-props";

import { Btn, BtnBg, BtnIcon, BtnText, Container, Value } from "./styles";

type ValueListProps = {
  items: ItemDataProps[];
  getTotal: (total: number) => void;
};

export function PageFooterList({ items, getTotal }: ValueListProps) {
  const calcTotal = () => {
    let total = 0;
    items.map((item) => {
      if (item.value) total += item.value * item.qtd;
    });
    return total;
  };

  const totalValue = calcTotal();
  getTotal(totalValue);
  const totalValueFormated = totalValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Container>
      <Value>Valor Total:</Value>
      <Value>R$ {totalValueFormated}</Value>
    </Container>
  );
}
