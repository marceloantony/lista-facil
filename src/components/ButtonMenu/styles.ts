import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Octicons";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  border-radius: 10px;
  padding: 8px 0;
  width: ${RFPercentage(14)}px;
`;

export const ButtonIcon = styled.View`
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_TEXT_COLOR};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(13)}px;
  text-align: center;
  margin-top: 8px;
`;

export const Circle = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.SECONDARY, theme.COLORS.SECONDARY_DARK],
  locations: [0, 1],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
}))`
  padding: 4px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  border-radius: 100px;
`;

export const IconButton = styled(Icon).attrs(({ theme }) => ({
  color: theme.COLORS.FOREGROUND_COLOR,
}))``;
