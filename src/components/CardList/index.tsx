import React from "react";
import { View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Feather";
import { CardListDataProps, CardListProps } from "../../@types/CardList";
import {
  Container,
  Date,
  Diviser,
  IconBox,
  Title,
  TitleBox,
  Value,
} from "./styles";


export function CardList({ data }: CardListProps) {
  return (
    <>
      <Container>
        <TitleBox>
          <IconBox>
            <Icon
              name={data.value >= 500 ? "shopping-cart" : "shopping-bag"}
              size={RFPercentage(3.75)}
              color="#FF6726"
            />
          </IconBox>
          <View>
            <Title>{data.title}</Title>
            <Date>{data.date.toLocaleDateString()}</Date>
          </View>
        </TitleBox>
        <Value>R${data.value}</Value>
      </Container>
      <Diviser />
    </>
  );
}
