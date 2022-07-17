import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Octicons";
import { Box, ButtonMenuProps, Container, IconBox, Title } from "./styles";

export function ButtonMenu({ title, icon, onPress }: ButtonMenuProps) {
  return (
    <Container onPress={onPress}>
      <Box>
        <IconBox>
          {icon === "add" ? (
            <Icon name="plus" size={RFPercentage(4.5)} />
          ) : (
            <Icon name="home" size={RFPercentage(4.5)} />
          )}
        </IconBox>
      </Box>
      <Title>{title}</Title>
    </Container>
  );
}
