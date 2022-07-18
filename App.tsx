import { Routes } from "./src/routes";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import light from "./src/themes/light";
import dark from "./src/themes/dark";
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Platform } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  if (Platform.OS === 'android') {
    require('intl');
    require('intl/locale-data/jsonp/fr-BE');
    require('intl/locale-data/jsonp/nl-BE');
    require('intl/locale-data/jsonp/it-IT');
  }

  if (!fontsLoaded) {
    // implementar loading !!!
    return <></>;
  }

  return (
    <ThemeProvider theme={light}>
      <StatusBar style="light" />
      <Routes />
    </ThemeProvider>
  );
}
