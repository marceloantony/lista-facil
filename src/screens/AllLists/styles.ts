import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { ListDataProps } from "../../@types/data-props";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
`;

export const List = styled(
  FlatList as new (
    props: FlatListProps<ListDataProps>
  ) => FlatList<ListDataProps>
)``;
