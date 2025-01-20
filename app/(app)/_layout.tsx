import { Redirect, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { selectHasOnboarded } from "@/components/onboarding/reducer";
import { useAppSelector } from "@/hooks/redux";

const Layout = () => {
  const hasOnboarded = useAppSelector(selectHasOnboarded);

  // Require onboarding to be run in (app) group's layout.
  if (!hasOnboarded) {
    SplashScreen.hideAsync();
    return <Redirect href="/onboarding" />;
  }

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              // position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default Layout;
