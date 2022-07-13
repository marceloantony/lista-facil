import React from "react";
import { Box, ButtonMenuProps, Container, Icon, Title } from "./styles";

export function ButtonMenu({ title, icon, onPress }: ButtonMenuProps) {
  return (
    <Container onPress={onPress}>
      <Box>
        {icon === "add" ? (
          <Icon source={require("../../assets/add.png")} resizeMode="contain" />
        ) : (
          <Icon source={require("../../assets/home.png")} resizeMode="contain" />
        )}
      </Box>
      <Title>{title}</Title>
    </Container>
  );
}
