import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.ScrollView`
  padding: 0 ${RFPercentage(2)}px;
`;

export const Field = styled.View`
  margin: 10px 0;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.SECONDARY_TEXT_COLOR};
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  border-radius: 8px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY_TEXT_COLOR};
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  padding: 8px;
`;

export const ProductValueField = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MonetaryValue = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.SECONDARY_TEXT_COLOR};
  margin-right: 10px;
`;

export const QuantityField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Btn = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  margin: 0 20px;
`;

export const BtnIcon = styled(Icon).attrs({
  size: RFPercentage(3),
})`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const BtnFooter = styled.TouchableOpacity<{ side: "left" | "right" }>`
  overflow: hidden;
  width: 50%;
  ${({ side }) =>
    side === "left"
      ? css`
          border-top-left-radius: 20px;
        `
      : css`
          border-top-right-radius: 20px;
        `}
`;

export const BtnText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  margin: 6px auto;
`;

const propsGradient = {
  locations: [0, 1],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
};
export const BtnBgConfirm = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.SECONDARY_DARK, theme.COLORS.SECONDARY],
  ...propsGradient,
}))``;
export const BtnBgCancel = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.PRIMARY, theme.COLORS.PRIMARY_LIGHT],
  ...propsGradient,
}))``;
