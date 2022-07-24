import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled, { css, useTheme } from "styled-components/native";

export const Conteiner = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  overflow: hidden;
`;

export const LeftBorder = styled.View<{ color: string }>`
  height: ${RFPercentage(3)}px;
  width: ${RFPercentage(3)}px;
  border-radius: 100px;
  background-color: ${({ color }) => color};
  margin: 0 ${RFPercentage(2)}px;
`;

export const TitleBox = styled.View`
  margin: 10px auto 10px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(17)}px;
`;

export const Quantity = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(18)}px;
  margin-right: ${RFPercentage(3)}px;
`;

export const BoxIconSides = styled.View<{ side: string; color: string }>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, side, color }) =>
    side === "left" ? color : theme.COLORS.DANGER};
  padding: 0 ${RFPercentage(2)}px;
`;

export const IconSides = styled(Icon).attrs(({ theme }) => ({
  color: theme.COLORS.TEXT_ALT,
}))`
  font-size: ${RFValue(32)}px;
`;
