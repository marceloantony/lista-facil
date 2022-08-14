import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

import {
  Container,
  LabelDate,
  IconBox,
  IconCard,
  Title,
  TitleBox,
  Value,
} from "./styles";
import { ListDataProps } from "../../@types/data-props";

import { shadowThemeDark, shadowThemeLight } from "../../themes/shadow";

type CardListProps = {
  data: ListDataProps;
};

export function CardList({ data }: CardListProps) {
  const navigation = useNavigation();
  const convertDate: Date = new Date(data.date);

  return (
    <Container
      style={
        useTheme().CURRENT_THEME === "light"
          ? shadowThemeLight
          : shadowThemeDark
      }
      onPress={() => navigation.navigate("InfoList", { idList: data.id })}
    >
      <TitleBox>
        <IconBox>
          <IconCard
            name={data.value >= 500 ? "shopping-cart" : "shopping-bag"}
          />
        </IconBox>
        <View>
          <Title>{data.title}</Title>
          <LabelDate>{convertDate.toLocaleDateString()}</LabelDate>
        </View>
      </TitleBox>
      <Value>
        R${" "}
        {data.value.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Value>
    </Container>
  );
}
