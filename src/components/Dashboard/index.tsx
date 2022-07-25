import React from "react";
import { Image } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function Dashboard() {
  const img =
    useTheme().CURRENT_THEME === "light"
      ? require("../../assets/dashboard-light.png")
      : require("../../assets/dashboard-dark.png");
  return (
    <Container>
      <Image
        source={img}
        resizeMode="stretch"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Container>
  );
}
