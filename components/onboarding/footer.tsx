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
      <View className="justify-center flex-row items-center">
        {Array.from({ length: data.length }).map((_, index) => (
          <View
            key={index}
            className={cn(
              `w-[8px] h-[8px] mb-4 rounded-full mx-1 bg-gray-400`,
              index === current && "bg-white w-[22px]",
            )}
          />
        ))}
      </View>
      <View>
        <Text
          className={"text-white text-center capitalize text-2xl font-bold mb-4 shadow"}
        >
          {onboardSlideData[current].title}
        </Text>
        <Text className={"text-center text-sm font-medium text-white shadow"}>
          {onboardSlideData[current].description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingFooter;
