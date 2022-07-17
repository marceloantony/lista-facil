import React from "react";
import { View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Feather";
import { Container, Date, IconBox, Title, TitleBox, Value } from "./styles";

export function CardList() {
  return (
    <Container>
      <TitleBox>
        <IconBox>
          {/* <Icon name="shopping-bag" size={RFPercentage(4)} /> */}
          <Icon name="shopping-cart" size={RFPercentage(4)} color="#FF6726" />
        </IconBox>
        <View>
          <Title>Shibata</Title>
          <Date>16/10/2000</Date>
        </View>
      </TitleBox>
      <Value>R$202,25</Value>
    </Container>
  );
}
