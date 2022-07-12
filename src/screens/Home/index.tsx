import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput, View } from "react-native";

export function Home() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  function openScreen() {
    navigation.navigate("screenB", { name: text});
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        value={text}
        onChangeText={setText}
        style={{
          marginBottom: 12,
          padding: 5,
          backgroundColor: "white",
          color: "#323130",
          borderRadius: 3,
        }}
        placeholder="Insira um texto aqui..."
      />
      <Button title="Ir para tela B" onPress={openScreen} />
    </View>
  );
}
