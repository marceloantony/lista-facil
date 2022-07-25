import React from "react";
import { CardItemDataProps } from "../../@types/data-props";

import { Container, Value } from "./styles";

type ValueListProps = {
  items: CardItemDataProps[];
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
