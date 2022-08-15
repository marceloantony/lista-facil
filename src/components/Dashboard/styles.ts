import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;
  justify-content: center;
`;

export const Warning = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.LIGHT};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  text-align: center;
  padding: 0 ${RFPercentage(2)}px;
`;
