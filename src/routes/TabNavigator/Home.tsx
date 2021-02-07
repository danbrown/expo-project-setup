import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// + Tab Screens
import HomeScreen from "../../screens/HomeScreen";

const TabStack = createStackNavigator();

export default function TabNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </TabStack.Navigator>
  );
}
