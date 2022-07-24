import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.PRIMARY, theme.COLORS.PRIMARY_LIGHT],
  locations: [0,1],
  start: { x: 0.3, y: 0.1 },
  end: { x: 0.1, y: 0.2 },
}))`
  flex: 1;
`;

export const Box = styled.View`
  padding: 12% ${RFPercentage(2)}px 0;
`;

export const GroupButtons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
