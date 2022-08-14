import React, { useCallback, useState } from "react";
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
  title: string;
  placeholder?: string;
  type?: "filter" | "input";
};

export function PageHeaderList({ title, placeholder, type }: Props) {
  const { setItem, getItem } = useAsyncStorage(keyAllLists);
  const navigation = useNavigation();
  const { idList } = useRoute().params as InfoListPageProps;
  const [text, setText] = useState("");
  const [lists, setLists] = useState<ListDataProps[]>([]);
  const [index, setIndex] = useState(0);
  const hasUnsavedText = Boolean(text);

  const getTitleList = async () => {
    const response = await getItem();
    const data: ListDataProps[] = response ? JSON.parse(response) : [];

    const list = data.filter((d, cont) => {
      if (d.id === idList) {
        setIndex(cont);
        return true;
      }
    })[0];

    setText(list.title);
    setLists(data);
  };
  const setTitleList = async () => {
    lists[index] = {
      ...lists[index],
      title: text,
    };
    await setItem(JSON.stringify(lists));
  };
  const isTitleEmpty = (e: any) => {
    e.preventDefault();
    if (!hasUnsavedText) {
      navigation.dispatch(e.data.action);
    }
    Alert.alert(
      "Campo pendente!",
      "Você não colocou o nome do mercado na lista."
    );
    console.log("texto: ", text);
  };

  useFocusEffect(
    useCallback(() => {
      if (type === "input") {
        getTitleList();
        // BackHandler.addEventListener("hardwareBackPress", () => {
        //   navigation.goBack();
        //   return true;
        // });
        // navigation.addListener("beforeRemove", isTitleEmpty);
      }
    }, [])
  );

  return (
    <Container>
      <Header>
        <ButtonBack onPress={navigation.goBack}>
          <IconBack name="arrowleft" />
        </ButtonBack>
        <TitlePage>{title}</TitlePage>
      </Header>
      {placeholder && (
        <Box>
          <InputTitle
            placeholder={placeholder}
            onChangeText={setText}
            value={text}
            onEndEditing={type === "input" ? setTitleList : () => {}}
          />
          <IconFilter name="filter" />
        </Box>
      )}
    </Container>
  );
}
