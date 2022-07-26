import React from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
import { shadowThemeDark, shadowThemeLight } from "../../themes/shadow";

type CardItemProps = {
  key: string;
  data: CardItemDataProps;
};

export function CardItem({ data }: CardItemProps) {
  const category = categories.filter((c) => c.id === data.category)[0];

  const renderSideIcon = (iconName: string, side: "left" | "right") => {
    return (
      <BoxIconSides>
        <IconSides name={iconName} side={side} color={category.color} />
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
        renderRightActions={() =>
          renderSideIcon("delete-forever-outline", "right")
        }
        onSwipeableLeftOpen={() =>
          Alert.alert("", "Aqui serão exibido as informações do item!")
        }
        onSwipeableRightOpen={removeItem}
      >
        <Conteiner
          style={
            useTheme().CURRENT_THEME === "light"
              ? shadowThemeLight
              : shadowThemeDark
          }
        >
          <LeftBorder color={category.color} />

          <TitleBox>
            <Title>{data.title}</Title>
            <Quantity>Quantidade: {data.qtd}</Quantity>
          </TitleBox>

          {data.value && (
            <Value>
              R${" "}
              {data.value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Value>
          )}
        </Conteiner>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
