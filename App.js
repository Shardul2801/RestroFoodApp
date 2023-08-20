import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OneRestaurantComponent from "./component/OneRestaurantComponent";
import RestaurantComponent from "./component/RestaurantComponent";
import RestaurantScreen from "./screens/RestaurantScreen";
import { StackNavigation } from "./Navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
