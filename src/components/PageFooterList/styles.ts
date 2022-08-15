import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";

export const Btn = styled.TouchableOpacity`
  overflow: hidden;
  border-radius: 50px;
  width: 40%;
`;
export const BtnIcon = styled(Icon).attrs({
  name: "check",
  size: RFPercentage(3),
})`
  color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  margin-right: 5px;
`;
export const BtnText = styled.Text`
  color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(16)}px;
`;
export const BtnBg = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.SECONDARY_DARK, theme.COLORS.SECONDARY],
  locations: [0, 1],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
}))`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

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
  font-size: ${RFValue(24)}px;
`;
