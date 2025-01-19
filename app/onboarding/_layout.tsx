/**
 * @fileOverview Onboarding layout with stack navigator routing to auth page after onboarding screens
 * @see https://docs.expo.dev/router/layouts/
 * @see https://docs.expo.dev/router/reference/authentication/
 */

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { handleSkipOnboarding } from "@/components/onboarding/actions";
import Button from "@/components/ui/button";

export default function OnboardingLayout() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style={"auto"} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="auth" />
      </Stack>
      <Button
        text={"Skip"}
        onPress={handleSkipOnboarding}
        style={{
          backgroundColor: "red",
          position: "absolute",
          borderRadius: 25,
          bottom: insets.bottom,
          left: 16,
          width: 50,
          height: 50,
        }}
      />
    </>
  );
}
