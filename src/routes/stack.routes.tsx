import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import { AllLists } from "../screens/AllLists";
import { Home } from "../screens/Home";
import { InfoList } from "../screens/InfoList";
import { ScreenB } from "../screens/ScreenB";
const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      
      <Screen
        name="AllLists"
        options={{
          title: "Todas as Compras",
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: useTheme().COLORS.PRIMARY,
          },
          headerTitleStyle: {
            fontFamily: useTheme().FONTS.MEDIUM
          },
          headerTintColor: useTheme().COLORS.FOREGROUND_COLOR,
        }}
        component={AllLists}
      />

      <Screen
        name="InfoList"
        options={{
          headerShown: false,
        }}
        component={InfoList}
      />
      
      <Screen
        name="screenB"
        options={{
          title: "Tela B",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "white",
        }}
        component={ScreenB}
      />
    </Navigator>
  );
}
