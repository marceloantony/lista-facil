import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

import {
  Container,
  Date,
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

  return (
    <Container style={useTheme().CURRENT_THEME === "LIGHT" ? shadowThemeLight : shadowThemeDark} onPress={() => navigation.navigate("InfoList")}>
      <TitleBox>
        <IconBox>
          <IconCard
            name={data.value >= 500 ? "shopping-cart" : "shopping-bag"}
          />
        </IconBox>
        <View>
          <Title>{data.title}</Title>
          <Date>{data.date.toLocaleDateString()}</Date>
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
