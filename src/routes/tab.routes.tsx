import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Home } from "../screens/Home";
import { ScreenB } from "../screens/ScreenB";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "green",
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
        component={Home}
      />
      <Screen
        name="screenB"
        options={{
          tabBarLabel: "Novo",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-box" color={color} size={size} />
          ),
        }}
        component={ScreenB}
      />
    </Navigator>
  );
}
