import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export type ButtonMenuProps = {
  title: string;
  icon: "add" | "home";
  onPress?: any;
};

export const Container = styled.TouchableOpacity`
  width: ${RFPercentage(15)}px;
  padding: 8px;
  align-items: center;
`;

export const Box = styled.View`
  padding: ${RFPercentage(1)}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 100px;
`;

export const IconBox = styled.View`
  width: ${RFPercentage(6)}px;
  height: ${RFPercentage(6)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_ALT};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFPercentage(2.4)}px;
  text-align: center;
  margin-top: 12px;
`;
