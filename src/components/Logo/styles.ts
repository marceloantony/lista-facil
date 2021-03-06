import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const IconLogo = styled.Image`
  width: ${RFPercentage(8)}px;
  height: 100%;
  margin-right: ${RFPercentage(2)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_LOGO};
  font-family: ${({ theme }) => theme.FONTS.LIGHT};
  font-size: 36px;
`;
