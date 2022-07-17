import React from "react";
import { View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemListDataProps } from "../../@types/data-props";
import {
  Category,
  Conteiner,
  Diviser,
  IconBox,
  Quantity,
  Title,
  TitleBox,
  Value,
} from "./styles";

export type ItemListProps = {
  data: ItemListDataProps;
};

export function ItemList({ data }: ItemListProps) {
  return (
    <>
      <Conteiner>
        <TitleBox>
          <IconBox>
            <Icon name="cow" size={RFPercentage(3.75)} />
          </IconBox>
          <View>
            {/* <Category>{data.category}</Category> */}
            <Title>{data.title}</Title>
            <Quantity>Quantidade: {data.qtd}</Quantity>
          </View>
        </TitleBox>
        <Value>R${data.value}</Value>
      </Conteiner>
      <Diviser />
    </>
  );
}
