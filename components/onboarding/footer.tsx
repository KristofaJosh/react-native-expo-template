import { Link } from "expo-router";
import { Text, View } from "react-native";

import { onboardSlideData } from "@/components/onboarding/onboard-slide-data";
import { cn } from "@/utils/tw-merge";

const OnboardingFooter = ({
  data,
  current = 0,
}: {
  current: number;
  data: typeof onboardSlideData;
}) => {
  return (
    <View className={"z-10 gap-4 mx-auto max-w-[500px]"}>
      <View>
        <Text
          className={"text-white text-center capitalize text-2xl font-bold"}
        >
          {onboardSlideData[current].title}
        </Text>
        <Text className={"text-center text-sm font-gfMedium text-white"}>
          {onboardSlideData[current].description}
        </Text>
      </View>
      <View className="justify-center flex-row items-center">
        {Array.from({ length: data.length }).map((_, index) => (
          <View
            key={index}
            className={cn(
              `w-[5px] h-[5px] mb-4 rounded-full mx-1 bg-gray-400`,
              index === current && "bg-white",
            )}
          />
        ))}
      </View>
      <View className={"gap-4"}></View>
      <Text className={"text-center text-sm text-gray-100 px-1"}>
        By signing up or logging in, you agree to our{" "}
        <Link href={"/"} asChild>
          <Text className={"text-white"}>Terms of service</Text>
        </Link>{" "}
        and
        <Link href={"/"} asChild>
          <Text className={"text-white"}>
            privacy policy
          </Text>
        </Link>
        .
      </Text>
    </View>
  );
};

export default OnboardingFooter;
