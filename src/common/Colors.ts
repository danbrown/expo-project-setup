// + DARK THEME
const primaryLight = "#953793";
const primaryHighlightLight = "#EDCFED";
const primaryShadeLight = "#4A1C4A";

const secondaryLight = "#469C11";
const secondaryHighlightLight = "#9BEE68";
const secondaryShadeLight = "#234E09";

const tertiaryLight = "#B12127";
const tertiaryHighlightLight = "#660000";

const lightBackgroundColor = "#fff";
const lightHighlightColor = "#fafafa";
const lightTextColor = "#000";
const lightShadeColor = "#bbb";
const lightDarkerColor = "#e9e9e9";

// + LIGHT THEME
const primaryDark = "#953793";
const primaryHighlightDark = "#EDCFED";
const primaryShadeDark = "#4A1C4A";

const secondaryDark = "#469C11";
const secondaryHighlightDark = "#9BEE68";
const secondaryShadeDark = "#234E09";

const tertiaryDark = "#B12127";
const tertiaryHighlightDark = "#660000";

const darkBackgroundColor = "#000";
const darkHighlightColor = "#444";
const darkTextColor = "#ddd";
const darkShadeColor = "#777";
const darkDarkerColor = "#222";

const defaults = {
  blank: "#fff",
  info: "#2f95dc",
  attention: "#e02121",
  alert: "goldenrod",
  success: "#00b565",

  transparent: "#00000000",

  dev: "goldenrod",

  themePrimary: secondaryLight,
  themeSecondary: primaryLight,
  themeTertiary: tertiaryLight,
};

export default {
  light: {
    tabBar: primaryLight,
    text: lightTextColor,
    invertedText: darkTextColor,
    background: lightBackgroundColor,
    invertedBackground: darkBackgroundColor,
    tint: primaryLight,
    primary: primaryLight,
    primaryHighlight: primaryHighlightLight,
    primaryShade: primaryShadeLight,
    secondary: secondaryLight,
    secondaryHighlight: secondaryHighlightLight,
    secondaryShade: secondaryShadeLight,
    tertiary: tertiaryLight,
    tertiaryHigh: tertiaryHighlightLight,
    highlight: lightHighlightColor,
    shade: lightShadeColor,
    darker: lightDarkerColor,
    tabIconDefault: "#ccc",
    tabIconSelected: primaryLight,
    ...defaults,
  },
  dark: {
    tabBar: primaryDark,
    text: darkTextColor,
    invertedText: lightTextColor,
    background: darkBackgroundColor,
    invertedBackground: lightBackgroundColor,
    tint: primaryDark,
    primary: primaryDark,
    primaryHighlight: primaryHighlightDark,
    primaryShade: primaryShadeDark,
    secondary: secondaryDark,
    secondaryHighlight: secondaryHighlightDark,
    secondaryShade: secondaryShadeDark,
    tertiary: tertiaryDark,
    tertiaryHigh: tertiaryHighlightDark,
    highlight: darkHighlightColor,
    shade: darkShadeColor,
    darker: darkDarkerColor,
    tabIconDefault: "#ccc",
    tabIconSelected: primaryDark,
    ...defaults,
  },
};
