import { Stack } from "expo-router";

const ExploreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name={"index"} options={{ headerShown: false }} />
      <Stack.Screen name={"[art_id]"} options={{ headerShown: false }} />
    </Stack>
  );
};

export default ExploreLayout;
