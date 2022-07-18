import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
  padding: 16px ${RFPercentage(3)}px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_ALT};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(24)}px;
`;
