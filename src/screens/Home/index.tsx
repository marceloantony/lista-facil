import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Container, GroupButtons } from "./styles";
import { ButtonMenu, Dashboard, Logo, RecentLists } from "../../components";

export function Home() {
  const navigation = useNavigation();

  function openScreen() {
    // navigation.navigate("screenB", { name: "text" });
    navigation.navigate("InfoList");
  }

  return (
    <Container>
      <Box>
        <Logo />
        <Dashboard />
        <GroupButtons>
          <ButtonMenu title="Criar uma Lista" icon="add" onPress={openScreen} />
          <ButtonMenu title="Itens em Casa" icon="home" />
        </GroupButtons>
      </Box>
      <RecentLists />
    </Container>
  );
}
