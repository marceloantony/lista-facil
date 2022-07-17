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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(3.5)}px;
  letter-spacing: -0.5px;
`;

export const LinkContent = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
`;

export const LinkText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFPercentage(2.2)}px;
  margin-right: ${RFPercentage(0.5)}px;
`;

export const Body = styled.FlatList``;
