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
import { CardItemDataProps } from "../../@types/data-props";
import { categories } from "../../data/categories";

import { GestureHandlerRootView } from "react-native-gesture-handler";

type CardItemProps = {
  key: string;
  data: CardItemDataProps;
};

export function CardItem({ data }: CardItemProps) {
  const category = categories.filter((c) => c.id === data.category)[0];

  const renderSideIcon = (iconName: string, side: "left" | "right") => {
    return (
      <BoxIconSides color={category.color} side={side}>
        <IconSides name={iconName} />
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
          Alert.alert("", "Aqui serão exibido as informações do item!")
        }
        onSwipeableRightOpen={removeItem}
      >
        <Conteiner
        >
          <LeftBorder color={category.color} />

          <TitleBox>
            <Title>{data.title}</Title>
            <Quantity>Quantidade: {data.qtd}</Quantity>
          </TitleBox>

          <Value>
            R${" "}
            {(data.value*data.qtd).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Value>
        </Conteiner>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
