import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// + Tab Screens
import DetailsScreen from "../../screens/DetailsScreen";

const TabStack = createStackNavigator();

export default function TabNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </TabStack.Navigator>
  );
}
