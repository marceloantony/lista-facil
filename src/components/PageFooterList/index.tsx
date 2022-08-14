import React from "react";
import { ItemDataProps } from "../../@types/data-props";

import { Btn, BtnBg, BtnIcon, BtnText, Container, Value } from "./styles";

type ValueListProps = {
  items: ItemDataProps[];
  onPress: any;
};

export function PageFooterList({ items, onPress }: ValueListProps) {
  const calcTotal = () => {
    let total = 0;
    items.map((item) => {
      if (item.value) total += item.value * item.qtd;
    });
    return total.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  return (
    <Container>
      <Btn onPress={onPress}>
        <BtnBg>
          <BtnIcon />
          <BtnText>Finalizar</BtnText>
        </BtnBg>
      </Btn>
      <Value>R$ {calcTotal()}</Value>
    </Container>
  );
}
