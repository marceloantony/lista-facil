import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { CardList } from "../../components";

import { styles } from "./styles";

export function AllLists() {
  return (
    <View style={styles.container}>
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
    </View>
  );
}
