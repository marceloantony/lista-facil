import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { CardListDataProps } from "../../@types/CardList";

export const Container = styled.View``;

export const AllList = styled(FlatList as new (props: FlatListProps<CardListDataProps>) => FlatList<CardListDataProps>)`
  padding: 0 ${RFPercentage(3)}px;
`;
