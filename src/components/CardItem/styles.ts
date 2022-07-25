import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled, { css } from "styled-components/native";

export const Conteiner = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  border-radius: 6px;
  margin: 6px ${RFPercentage(2)}px;
  overflow: hidden;
`;

export const LeftBorder = styled.View<{ color: string }>`
  height: 100%;
  width: 8px;
  background-color: ${({ color }) => color};
  margin-right: ${RFPercentage(2)}px;
`;

export const TitleBox = styled.View`
  margin: 8px auto 8px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_TEXT_COLOR};
`;

export const Quantity = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_TEXT_COLOR};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_TEXT_COLOR};
  margin-right: ${RFPercentage(2)}px;
`;

export const BoxIconSides = styled.View`
  align-items: center;
  justify-content: center;
`;

export const IconSides = styled(Icon)<{ side: string; color: string }>`
  font-size: ${RFValue(32)}px;
  color: ${({ theme, side, color }) =>
    side === "left" ? color : theme.COLORS.DANGER};
  ${({ side }) =>
    side === "left"
      ? css`
          margin-left: ${RFPercentage(2)}px;
        `
      : css`
          margin-right: ${RFPercentage(2)}px;
        `};
`;
