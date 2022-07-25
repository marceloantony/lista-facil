import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { ButtonMenu } from "../ButtonMenu";

export function GroupButtonsMenu() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("screenB", { name: "Em Breve. CALMA!" });
  }

  return (
    <Container>
      <ButtonMenu
        title="Itens Casa"
        icon="home"
        onPress={() => navigation.navigate("ListHome")}
      />
      <ButtonMenu
        title="Criar Lista"
        icon="plus"
        onPress={() => navigation.navigate("InfoList")}
      />
      <ButtonMenu title="Em Breve" icon="question" onPress={openScreen} />
      {/* <ButtonMenu title="Tema Claro" icon="sun" /> */}
      {/* <ButtonMenu title="Tema Escuro" icon="moon" /> */}
    </Container>
  );
}
