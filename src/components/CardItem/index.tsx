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

import { categories } from "../../data/";
import { shadowThemeDark, shadowThemeLight } from "../../themes/shadow";
import { formatStringQuantity } from "../../hooks";

type Props = {
  data: ItemDataProps;
  setRef: any;
  closeRow: (id: string, del?: boolean) => void;
};

export function CardItem({ data, setRef, closeRow }: Props) {
  const category = categories.filter((c) => c.id === data.category)[0];
  const total = data.value ? data.value * data.qtd : 0;
  const localeStringArgs = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const renderSideIcon = (iconName: string, side: "left" | "right") => {
    return (
      <BoxIconSides>
        <IconSides name={iconName} side={side} color={category.color} />
      </BoxIconSides>
    );
  };

  const openModal = (id: string, item: ItemDataProps) => {
    const body = `
      • Nome: ${item.name}\n
      • Valor Unitário: R$ ${item.value?.toLocaleString("pt-BR", localeStringArgs)}\n
      • Quantidade: ${formatStringQuantity(item.qtd)}\n
      • Observações: ${item.obs === "" ? "Nenhuma" : item.obs}
      `;
    Alert.alert("Informações do item", body, [{ onPress: () => closeRow(id) }]);
  };

  const removeItem = (id: string) => {
    Alert.alert(
      "Remover",
      "Tem certeza que desdeja remover esse item da lista?",
      [
        { text: "Não", onPress: () => closeRow(id), style: "cancel" },
        { text: "Sim", onPress: () => closeRow(id, true) },
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
        onSwipeableLeftOpen={() => openModal(data.id, data)}
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
            <Title>{data.name}</Title>
            <Quantity>Quantidade: {formatStringQuantity(data.qtd)}</Quantity>
          </TitleBox>

          {data.value && (
            <Value>
              R$ {total.toLocaleString("pt-BR", localeStringArgs)}
            </Value>
          )}
        </Conteiner>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
