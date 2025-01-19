import { router } from "expo-router";

export const handleSkipOnboarding = async () => {
  // await storage.set(KEYS.APP_STATE, { onboarded: true });
  router.replace("/(app)");
};