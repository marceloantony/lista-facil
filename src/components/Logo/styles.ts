import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 30px 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
  font-family: ${({ theme }) => theme.FONTS.LIGHT};
  font-size: ${RFPercentage(5)}px;
`;