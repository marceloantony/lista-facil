import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import { AddItem } from "../screens/AddItem";
import { AllLists } from "../screens/AllLists";
import { Home } from "../screens/Home";
import { InfoList } from "../screens/InfoList";
import { ListHome } from "../screens/ListHome";
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
          headerShown: false,
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
        name="AddItem"
        options={{
          headerShown: false,
        }}
        component={AddItem}
      />

      <Screen
        name="ListHome"
        options={{
          headerShown: false,
        }}
        component={ListHome}
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
