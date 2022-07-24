import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { CategoriesProps } from "../../@types/data-props";

export type ColorProps = {
  color: string;
};

export const Container = styled.View``;

export const AllList = styled(
  FlatList as new (
    props: FlatListProps<CategoriesProps>
  ) => FlatList<CategoriesProps>
)`
  padding: 0 ${RFPercentage(3)}px;
`;

export const ItemCategory = styled.View<{ key: string }>`
  /* margin: 12px 0; */
`;

export const HearderCategory = styled.View<ColorProps>`
  flex-direction: row;
  padding: 6px ${RFPercentage(2)}px;
  /* background-color: ${({ color }) => color}; */
  background-color: ${({ theme }) => theme.COLORS.GRAY}2A;
  `;

export const TitleCategory = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(15)}px;
  color: ${({ color }) => color};
  margin-left: ${RFPercentage(1.5)}px;
`;

export const FooterEmpty = styled.View`
  margin-top: ${RFPercentage(25)}px;
`;
