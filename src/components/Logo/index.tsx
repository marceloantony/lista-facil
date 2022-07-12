import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Logo() {
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>☺ Lista Facil</Text>
    </View>
  );
}