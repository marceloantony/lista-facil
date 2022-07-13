import { Routes } from "./src/routes";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import light from "./src/themes/light";
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

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
