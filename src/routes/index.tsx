import * as React from "react";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { darkTheme, defaultTheme } from "@theme";

// + COMPONENTS
import { ColorSchemeName, View, ActivityIndicator } from "react-native";

// + NAVIGATORS
import RootNavigator from "./RootNavigator";

// - COMPONENT
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  // const { started, signed, loading } = useAuth();

  // if (!started) {
  //   return <LoadingScreen />;
  // }

  return (
    <PaperProvider theme={colorScheme === "dark" ? darkTheme : defaultTheme}>
      <NavigationContainer
        theme={colorScheme === "dark" ? darkTheme : defaultTheme}
      >
        <RootNavigator />
        {/* {signed ? <RootNavigator /> : <LoginNavigator />} */}
      </NavigationContainer>
    </PaperProvider>
  );
}

const LoadingScreen = () => {
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};
