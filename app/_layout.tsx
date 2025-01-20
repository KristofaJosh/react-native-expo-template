import "../global.css";

import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { store } from "@/redux/store";
import StoreProvider from "@/redux/store-provider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  console.log(store.getState());

  return (
    <StoreProvider>
      <StatusBar style="dark" />
      <Slot />
    </StoreProvider>
  );
}
