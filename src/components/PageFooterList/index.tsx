import React from "react";
import { ItemDataProps } from "../../@types/data-props";

import { Container, Value } from "./styles";

type ValueListProps = {
  items: ItemDataProps[];
};

export function PageFooterList({ items }: ValueListProps) {
  const calcTotal = () => {
    let total = 0;
    items.map((item) => {
      total += item.value * item.qtd;
    });
    return total.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  return (
    <Container>
      <Value>Total: R$ {calcTotal()}</Value>
    </Container>
  );
}
