import { FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { ListDataProps } from "../../@types/data-props";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 ${RFPercentage(2)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(20)}px;
  letter-spacing: -0.5px;
`;

export const LinkContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
`;

export const LinkText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(13)}px;
  margin-right: ${RFPercentage(0.5)}px;
  margin-top: -3px;
`;