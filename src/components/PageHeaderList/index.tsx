import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

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

type Props = {
  title: string;
  placeholder: string;
};

export function PageHeaderList({ title, placeholder }: Props) {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <IconBack name="arrowleft" />
        </ButtonBack>
        <TitlePage>{title}</TitlePage>
      </Header>
      <Box>
        <InputTitle
          placeholder={placeholder}
          onChangeText={setText}
          value={text}
        />
        <IconFilter name="filter" />
      </Box>
    </Container>
  );
}
