import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { Container } from "./style";
import { Logo } from "../../components";

export function Home() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("screenB", { name: "text" });
  }

  return (
    <Container>
      <Logo />
      <Button title="Ir para tela B" onPress={openScreen} />
    </Container>
  );
}
