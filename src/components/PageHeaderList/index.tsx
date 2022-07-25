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

export function PageHeaderList() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");

  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <IconBack name="arrowleft" />
        </ButtonBack>
        <TitlePage>Lista de Compras</TitlePage>
      </Header>
      <Box>
        <InputTitle
          placeholder="Nome do mercado..."
          onChangeText={setTitle}
          value={title}
        />
        <IconFilter name="filter" />
      </Box>
    </Container>
  );
}
