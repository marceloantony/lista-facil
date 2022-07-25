import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { shadowThemeDark, shadowThemeLight } from "../../themes/shadow";

import { Circle, Container, ButtonIcon, Title, IconButton } from "./styles";

type ButtonMenuProps = {
  title: string;
  icon: string;
  onPress?: any;
};

export function ButtonMenu({ title, icon, onPress }: ButtonMenuProps) {
  return (
    <Container onPress={onPress} style={useTheme().CURRENT_THEME === "LIGHT" ? shadowThemeLight : shadowThemeDark}>
      <Circle>
        <ButtonIcon>
          <IconButton name={icon} size={RFPercentage(3)} />
        </ButtonIcon>
      </Circle>
      <Title>{title}</Title>
    </Container>
  );
}
