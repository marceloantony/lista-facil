import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator>
      <Screen
        name="screenA"
        options={{
          tabBarLabel: "Home"
        }}
        component={ScreenA}
      />
      <Screen
        name="screenB"
        options={{
          tabBarLabel: "Novo"
        }}
        component={ScreenB}
      />
    </Navigator>
  );
}
