import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
`;

export const Icon = styled.Image`
  width: ${RFPercentage(10)}px;
  height: 100%;
  margin-right: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_ALT};
  font-family: ${({ theme }) => theme.FONTS.LIGHT};
  font-size: ${RFPercentage(5)}px;
`;
