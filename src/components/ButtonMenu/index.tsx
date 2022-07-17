import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Octicons";
import { Circle, ButtonMenuProps, Container, ButtonIcon, Title } from "./styles";

export function ButtonMenu({ title, icon, onPress }: ButtonMenuProps) {
  return (
    <Container onPress={onPress}>
      <Circle>
        <ButtonIcon>
          {icon === "add" ? (
            <Icon name="plus" size={RFPercentage(3.3)} />
          ) : (
            <Icon name="home" size={RFPercentage(3.3)} />
          )}
        </ButtonIcon>
      </Circle>
      <Title>{title}</Title>
    </Container>
  );
}
