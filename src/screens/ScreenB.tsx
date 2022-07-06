import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

type ParamsProps = {
  name: string;
};

export function ScreenB() {
  const navigate = useNavigation();
  const route = useRoute();
  const { name } = route.params as ParamsProps;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, color: "white" }}>{name}</Text>
      <Button title="Voltar" onPress={() => navigate.goBack()} />
    </View>
  );
}
