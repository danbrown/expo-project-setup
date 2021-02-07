import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// + SUB NAVIGATORS
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}
