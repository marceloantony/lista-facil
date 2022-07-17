import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  margin: 24px 0;
`;

export const Circle = styled.View`
  padding: 5px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 100px;
`;

export const ButtonIcon = styled.View`
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_ALT};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(14)}px;
  text-align: center;
  margin-top: 8px;
`;
