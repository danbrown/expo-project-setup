import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// + ICONS
import { Ionicons as Icon } from "@expo/vector-icons";

// + COLORS
import { Colors } from "@common";
import { useColorScheme } from "@hooks";

// + Tabs Stacks
import HomeTabNavigator from "./Home";
import DetailsTabNavigator from "./Details";

// - COMPONENT
const BottomTab = createMaterialBottomTabNavigator();
export default function BottomTabNavigator() {
  const theme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName={"Tab"}
      barStyle={{ backgroundColor: Colors[theme].primary }}
      activeColor={Colors[theme].primaryHighlight}
      inactiveColor={Colors[theme].primaryShade}
    >
      <BottomTab.Screen
        name={"Home"}
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={20} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={"Details"}
        component={DetailsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="list" size={20} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
