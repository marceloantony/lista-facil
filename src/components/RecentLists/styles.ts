import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 18px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFPercentage(3.5)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  letter-spacing: -0.5px;
`;
