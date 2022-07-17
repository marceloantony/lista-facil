import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AllLists } from "../screens/AllLists";
import { Home } from "../screens/Home";
import { InfoList } from "../screens/InfoList";
import { ScreenB } from "../screens/ScreenB";
import light from "../themes/light";

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
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: light.COLORS.PRIMARY,
          },
          headerTintColor: light.COLORS.TEXT_ALT,
        }}
        component={AllLists}
      />

      <Screen
        name="InfoList"
        options={{
          title: "Lista de Compras",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: light.COLORS.PRIMARY,
          },
          headerTintColor: light.COLORS.TEXT_ALT,
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
