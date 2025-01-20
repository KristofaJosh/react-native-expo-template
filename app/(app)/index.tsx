/**
 * @fileOverview
 * Show the logged user and other users to illustrate fetching data from the server.
 */

import { View } from "react-native";

import { selectAuthState } from "@/components/auth/reducer";
import Typography from "@/components/ui/typography";
import { useAppSelector } from "@/hooks/redux";

export default function Home() {
  const { session, lastLogin } = useAppSelector(selectAuthState);

  return (
    <View className="flex-1 bg-white p-4 gap-8">
      <View>
        <Typography className={"font-semibold text-3xl"}>
          Good day, {session?.name ?? "Guest"}
        </Typography>
        <Typography className={"capitalize text-sm"}>
          last login: {lastLogin || "Today"}
        </Typography>
      </View>
      <View className={"border rounded p-3 h-[80px]"}>
        <Typography>XXXX</Typography>
      </View>
    </View>
  );
}
