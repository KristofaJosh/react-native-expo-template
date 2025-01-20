/**
 * @fileOverview
 * Show the logged user and other users to illustrate fetching data from the server.
 */

import { useEffect } from "react";
import { FlatList, View } from "react-native";

import Typography from "@/components/ui/typography";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getUsersFetch, selectAuthState } from "@/reducers/auth/reducer";

export default function Home() {
  const dispatch = useAppDispatch();
  const { session, lastLogin, users, error } = useAppSelector(selectAuthState);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, []);

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
      {error && <Typography>{error}</Typography>}
      {users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <View className={"border border-gray-400 rounded p-3 h-[80px] mb-4"}>
              <Typography className={'text-lg'}>{item.name}</Typography>
              <Typography className={'text-sm'}>{item.username}</Typography>
              <Typography className={'text-sm'}>{item.email}</Typography>
            </View>
          )}
        />
      ) : (
        <Typography>Nothing was returned from the server!</Typography>
      )}
    </View>
  );
}
