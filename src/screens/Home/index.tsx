import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput, View } from "react-native";
import { styles } from "./style";
import { Logo } from "../../components";

export function Home() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("screenB", { name: "text" });
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Button title="Ir para tela B" onPress={openScreen} />
    </View>
  );
}
