import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
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
