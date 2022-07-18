import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { ListDataProps } from "../../@types/data-props";
import {
  Container,
  Date,
  Diviser,
  IconBox,
  IconCard,
  Title,
  TitleBox,
  Value,
} from "./styles";

type CardListProps = {
  data: ListDataProps;
};

export function CardList({ data }: CardListProps) {
  const navigation = useNavigation();

  const option = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    era: "long",
    timeZoneName: "long",
  };

  return (
    <>
      <Container onPress={() => navigation.navigate("InfoList")}>
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
      <Diviser />
    </>
  );
}
