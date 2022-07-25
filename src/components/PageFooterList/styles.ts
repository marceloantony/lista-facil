import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.PRIMARY, theme.COLORS.PRIMARY_LIGHT],
  locations: [0, 1],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px ${RFPercentage(3)}px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: 0;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(22)}px;
`;
