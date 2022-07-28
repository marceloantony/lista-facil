import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { CategoryDataProps, ItemDataProps } from "../../@types/data-props";

export type ColorProps = {
  color: string;
};

export const Container = styled.View``;

export const ListCategories = styled(
  FlatList as new (
    props: FlatListProps<CategoryDataProps>
  ) => FlatList<CategoryDataProps>
)``;

export const ListItems = styled(
  FlatList as new (
    props: FlatListProps<ItemDataProps>
  ) => FlatList<ItemDataProps>
)``;

export const ItemCategory = styled.View`
  margin: 12px 0;
`;

export const HearderCategory = styled.View`
  flex-direction: row;
  margin-left: ${RFPercentage(2)}px;
  margin-bottom: 4px;
`;

export const TitleCategory = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(15)}px;
  color: ${({ color }) => color};
  margin-left: ${RFPercentage(1.5)}px;
`;

export const FooterEmpty = styled.View`
  margin-bottom: ${RFPercentage(30)}px;
`;
