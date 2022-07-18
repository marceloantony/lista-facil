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
  margin: 12px 0;
`;

export const TitleCategory = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(15)}px;
  margin-left: ${RFPercentage(3)}px;
  color: ${({ color }) => color};
`;
