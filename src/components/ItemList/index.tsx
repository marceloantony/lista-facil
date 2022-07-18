import React from "react";
import { View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Conteiner,
  IconBox,
  Quantity,
  Title,
  TitleBox,
  Value,
} from "./styles";
import { ItemListDataProps } from "../../@types/data-props";
import { categories } from "../../data/categories";

import IconAC from "react-native-vector-icons/AntDesign";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconMI from "react-native-vector-icons/MaterialIcons";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconFA5 from "react-native-vector-icons/FontAwesome5";

type ItemListProps = {
  key: string;
  data: ItemListDataProps;
};

export function ItemList({ data }: ItemListProps) {
  const category = categories.filter((c) => c.id === data.category)[0];

  return (
    <>
      <Conteiner>
        <TitleBox>
          <IconBox>
            {category.iconLib === "AntDesign" ? (
              <IconAC
                name={category.iconName}
                size={RFPercentage(3.75)}
                color={category.color}
              />
            ) : undefined}
            {category.iconLib === "MaterialCommunityIcons" ? (
              <IconMCI
                name={category.iconName}
                size={RFPercentage(3.75)}
                color={category.color}
              />
            ) : undefined}
            {category.iconLib === "MaterialIcons" ? (
              <IconMI
                name={category.iconName}
                size={RFPercentage(3.75)}
                color={category.color}
              />
            ) : undefined}
            {category.iconLib === "FontAwesome" ? (
              <IconFA
                name={category.iconName}
                size={RFPercentage(3.75)}
                color={category.color}
              />
            ) : undefined}
            {category.iconLib === "FontAwesome5" ? (
              <IconFA5
                name={category.iconName}
                size={RFPercentage(3.75)}
                color={category.color}
              />
            ) : undefined}
          </IconBox>
          <View>
            <Title>{data.title}</Title>
            <Quantity>Quantidade: {data.qtd}</Quantity>
          </View>
        </TitleBox>
        <Value>R$ {data.value.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}</Value>
      </Conteiner>
    </>
  );
}
