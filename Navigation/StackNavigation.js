import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "../screens/RestaurantScreen";
import ItemScreen from "../screens/ItemScreen";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
    </Stack.Navigator>
  );
};
