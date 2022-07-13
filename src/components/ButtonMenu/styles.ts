import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export type ButtonMenuProps = {
  title: string;
  icon: "add" | "home";
  onPress?: any;
};

export const Container = styled.TouchableOpacity`
  width: ${RFPercentage(15)}px;
  padding: 12px;
  align-items: center;
`;

export const Box = styled.View`
  padding: ${RFPercentage(1)}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 100px;
`;

export const Icon = styled.Image`
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_ALT};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFPercentage(2.4)}px;
  text-align: center;
  margin-top: 12px;
`;
