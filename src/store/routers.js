import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/loginComponent";
import Movies from "../components/movieComponent";
import MoreDetails from "../components/moreDetailsComponent";

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="MoreDetails"
          component={MoreDetails}
          Options={{ title: "More Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
