/**
 * @fileOverview
 * Show the logged user and other users to illustrate fetching data from the server.
 */

import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";

import Typography from "@/components/ui/typography";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getUsersFetch, selectAuthState } from "@/reducers/auth/reducer";

export default function Home() {
  const dispatch = useAppDispatch();
  const { session, lastLogin, users, error, isLoading } =
    useAppSelector(selectAuthState);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, []);

  return (
    <View className="flex-1 bg-white p-4 gap-8">
      <View className={"flex-row justify-between"}>
        <View>
          <Typography className={"capitalize font-semibold text-3xl"}>
            Good day, {session?.username ?? "Guest"}
          </Typography>
          <Typography className={"capitalize text-xs"}>
            last login: {lastLogin || "Today"}
          </Typography>
        </View>
        <TouchableOpacity onPress={() => dispatch(getUsersFetch())}>
          <Typography className={"text-xs font-bold"}>Refresh</Typography>
        </TouchableOpacity>
      </View>
      {error && <Typography>{error}</Typography>}
      {isLoading && (
        <View>
          <ActivityIndicator />
        </View>
      )}
      {!isLoading && users.length === 0 && (
        <Typography>Nothing was returned from the server!</Typography>
      )}
      {users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <View
              className={"border border-gray-400 rounded p-3 h-[80px] mb-4"}
            >
              <Typography className={"text-lg"}>{item.name}</Typography>
              <Typography className={"text-sm"}>{item.username}</Typography>
              <Typography className={"text-sm"}>{item.email}</Typography>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}
