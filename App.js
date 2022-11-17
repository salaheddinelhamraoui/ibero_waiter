import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Screens from "./screens/Screens";

export default function App() {
  const [loaded] = useFonts({
    GilroyExtraBold: require("./assets/fonts/Gilroy-ExtraBold.otf"),
    GilroyLight: require("./assets/fonts/Gilroy-Light.otf"),
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    Inter: require("./assets/fonts/Inter-VariableFont_slntwght.ttf"),
    Varela: require("./assets/fonts/VarelaRound-Regular.ttf"),
  });

  if (!loaded) return null;
  return (

    <Screens />

  );
}
