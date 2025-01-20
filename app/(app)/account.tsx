import { router } from "expo-router";
import { Text, View } from "react-native";

import Button from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { logoutUser, resetAuth } from "@/reducers/auth/reducer";

const Account = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/onboarding/auth");
  };

  const handleReset = () => {
    dispatch(resetAuth());
  };

  return (
    <View className={"flex-1 p-4 gap-4 bg-white"}>
      <Text className={"text-3xl"}>Account</Text>
      <View className={"h-[75%]"}>
        <Text className={"text-sm"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aliquam aliquid amet aut blanditiis cumque delectus doloremque dolores
          eaque eligendi facilis fugit inventore ipsa laboriosam maiores, nulla
          obcaecati omnis placeat praesentium quae quam quisquam quod temporibus
          velit veritatis, voluptates, voluptatum? Amet commodi fuga fugiat,
          maiores obcaecati praesentium provident quasi, quia quis quod sunt
          tempora, totam vel.
        </Text>
      </View>
      <View className={"gap-4 flex-row w-full"}>
        <Button className={"flex-grow"} onPress={handleLogout}>
          Logout
        </Button>
        <Button className={"bg-red-500"} onPress={handleReset}>
          Reset
        </Button>
      </View>
    </View>
  );
};

export default Account;
