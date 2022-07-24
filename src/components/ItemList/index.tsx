import React from "react";
import { Alert, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import {
  BoxIconSides,
  Conteiner,
  IconSides,
  LeftBorder,
  Quantity,
  Title,
  TitleBox,
  Value,
} from "./styles";
import { ItemListDataProps } from "../../@types/data-props";
import { categories } from "../../data/categories";

import { GestureHandlerRootView } from "react-native-gesture-handler";

type ItemListProps = {
  key: string;
  data: ItemListDataProps;
};

export function ItemList({ data }: ItemListProps) {
  const category = categories.filter((c) => c.id === data.category)[0];

  const renderSideIcon = (iconName: string, side: "left" | "right") => {
    return (
      <BoxIconSides>
        <IconSides name={iconName} side={side} />
      </BoxIconSides>
    );
  };

  const removeItem = () => {
    Alert.alert(
      "Remover",
      "Tem certeza que desdeja remover esse item da lista?"
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={() => renderSideIcon("information-outline", "left")}
        renderRightActions={() => renderSideIcon("trash-can-outline", "right")}
        onSwipeableLeftOpen={() =>
          Alert.alert("", "Aqui será exibido as informações do item incerido!")
        }
        onSwipeableRightOpen={removeItem}
      >
        <Conteiner
          style={{
            elevation: 3,
          }}
        >
          <LeftBorder color={category.color} />

          <TitleBox>
            <Title>{data.title}</Title>
            <Quantity>Quantidade: {data.qtd}</Quantity>
          </TitleBox>

          <Value>
            R${" "}
            {data.value.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Value>
        </Conteiner>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
