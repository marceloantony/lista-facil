import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";

export const shadow: StyleProp<ViewStyle> = {
  elevation: 4,
  shadowColor: "#A1A1A1",
};

export const Box = styled.View`
  padding: 12% ${RFPercentage(2)}px 0;
`;

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.PRIMARY, theme.COLORS.PRIMARY_LIGHT],
  locations: [0, 1],
  start: { x: 0.3, y: 0.1 },
  end: { x: 0.1, y: 0.2 },
}))`
  flex: 1;
`;
