import {  Stack } from 'expo-router';
import {SafeAreaView} from "react-native-safe-area-context";

export default function NotFoundScreen() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: 'Oops!' }} />
    </SafeAreaView>
  );
}