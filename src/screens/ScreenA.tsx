import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

export function ScreenA() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("screenB");
  }

  return (
    <View style={{ flex: 1, backgroundColor: "red", justifyContent:"center" }}>
      <Button title="Ir para tela B" onPress={openScreen} />
    </View>
  );
}
