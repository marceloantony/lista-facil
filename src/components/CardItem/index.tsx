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
import { ItemDataProps } from "../../@types/data-props";

import { categories } from "../../data/categories";
import { shadowThemeDark, shadowThemeLight } from "../../themes/shadow";

type Props = {
  data: ItemDataProps;
  setRef: any;
  closeRow: any;
};

export function CardItem({ data, setRef, closeRow }: Props) {
  const category = categories.filter((c) => c.id === data.category)[0];

  const renderSideIcon = (iconName: string, side: "left" | "right") => {
    return (
      <BoxIconSides>
        <IconSides name={iconName} side={side} color={category.color} />
      </BoxIconSides>
    );
  };

  const openModal = (id: string) => {
    Alert.alert("", "Aqui serão exibido as informações do item!", [
      { onPress: () => closeRow(id) },
    ]);
  };

  const removeItem = (id: string) => {
    Alert.alert(
      "Remover",
      "Tem certeza que desdeja remover esse item da lista?",
      [
        { text: "Não", onPress: () => closeRow(id), style: "cancel" },
        { text: "Sim", onPress: () => closeRow(id) },
      ]
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        id={data.id}
        ref={(ref) => setRef(ref)}
        renderLeftActions={() => renderSideIcon("information-outline", "left")}
        renderRightActions={() =>
          renderSideIcon("delete-forever-outline", "right")
        }
        onSwipeableLeftOpen={() => openModal(data.id)}
        onSwipeableRightOpen={() => removeItem(data.id)}
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
