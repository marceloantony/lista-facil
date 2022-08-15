import React, {
  useCallback,
  useEffect,
  useState,
  VoidFunctionComponent,
} from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import {
  IconFilter,
  Container,
  InputTitle,
  Box,
  IconBack,
  ButtonBack,
  TitlePage,
  Header,
} from "./styles";
import { InfoListPageProps, ListDataProps } from "../../@types/data-props";
import { keyAllLists } from "../../data";
import { Alert, BackHandler } from "react-native";

type Props = {
  titlePage: string;
  placeholder?: string;
  inputText?: string;
  handleText?: any;
  onEndEditing?: () => void;
};

export function PageHeaderList({
  titlePage,
  placeholder,
  inputText = "",
  handleText,
  onEndEditing,
}: Props) {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <ButtonBack onPress={navigation.goBack}>
          <IconBack name="arrowleft" />
        </ButtonBack>
        <TitlePage>{titlePage}</TitlePage>
      </Header>
      {placeholder && (
        <Box>
          <InputTitle
            placeholder={placeholder}
            onChangeText={handleText}
            value={inputText}
            onEndEditing={onEndEditing}
          />
          <IconFilter name="filter" />
        </Box>
      )}
    </Container>
  );
}
