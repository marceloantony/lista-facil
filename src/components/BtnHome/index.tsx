import React from "react";
import { TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function BtnHome() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
    </View>
  );
}
