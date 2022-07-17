import { FlatList, FlatListProps } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { ItemListDataProps } from "../../@types/data-props";

export const Conteiner = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const List = styled(FlatList as new (props: FlatListProps<ItemListDataProps>) => FlatList<ItemListDataProps>)``;