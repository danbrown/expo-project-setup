import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";
import { useColorScheme as appearanceColorScheme } from "react-native-appearance";

export default function useColorScheme(): NonNullable<ColorSchemeName> {
  const currentTheme = appearanceColorScheme() as NonNullable<ColorSchemeName>;
  return currentTheme === "dark" || currentTheme === "light"
    ? currentTheme
    : `light`;
}
