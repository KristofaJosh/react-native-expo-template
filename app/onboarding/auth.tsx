import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

import Button from "@/components/ui/button";
import Textbox from "@/components/ui/text-box";

const Auth = () => {
  return (
    <>
      <View className={"flex-1 bg-gray-100"}>
        <View className={"items-center h-full gap-8"}>
          <View
            style={{
              elevation: 7,
              shadowOffset: { width: 5, height: 5 },
            }}
            className={
              "relative h-[30%] justify-end items-start rounded-b-3xl overflow-hidden w-full drop-shadow shadow-2xl"
            }
          >
            <Image
              blurRadius={2}
              source={require("@/assets/images/onboarding/slide-4.jpg")}
              className="w-full h-full absolute left-0 right-0"
              resizeMode="cover"
            />
            <Text className={"text-5xl text-white font-semibold mx-4"}>
              Artify
            </Text>
            <Text className={"text-white text-sm mx-4 mb-4"}>
              Enter account credentials or signup
            </Text>
          </View>
          <View className={"p-4 gap-8"}>
            <View className={"gap-4 mb-8"}>
              <Textbox
                label={"username"}
                autoCapitalize={"none"}
                autoCorrect={false}
              />
              <Textbox
                label={"password"}
                autoCapitalize={"none"}
                autoCorrect={false}
                secureTextEntry={true}
                textContentType={"password"}
              />
            </View>
            <View className={"gap-4"}>
              <Button>Login</Button>
              <Button
                className={"border bg-gray-500 border-gray-500"}
                textClassName={"text-white"}
              >
                Create Account
              </Button>
            </View>
            <View>
              <Text className={"text-center text-sm text-gray-500 px-1"}>
                By signing up or logging in, you agree to our{" "}
                <Link href={"/"} asChild>
                  <Text className={"text-black"}>Terms of service</Text>
                </Link>{" "}
                and{" "}
                <Link href={"/"} asChild>
                  <Text className={"text-black"}>privacy policy</Text>
                </Link>
                .
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Auth;
