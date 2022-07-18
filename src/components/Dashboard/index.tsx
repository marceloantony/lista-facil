import React from "react";
import { Image } from "react-native";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Image
        source={require("../../assets/dashboard.png")}
        resizeMode="stretch"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Container>
  );
}
