import { Text,TouchableOpacity, View } from "react-native";

import { cn } from "@/utils/tw-merge";

const OnboardingHeader = ({
  onSkip,
  className,
}: {
  onSkip: () => void;
  className?: string;
}) => {
  return (
    <View
      className={cn(
        "max-w-[500px] justify-between flex-row items-center",
        className,
      )}
    >
      <View />
      <View className={"h-[30px] w-[30px] relative left-2.5"}>
        {/*<Image*/}
        {/*  source={require("@/assets/images/onboarding/logo.png")}*/}
        {/*  className="inset-0 w-full h-full"*/}
        {/*  resizeMode="cover"*/}
        {/*/>*/}
        <Text>
          Artify
        </Text>
      </View>
      <TouchableOpacity onPress={onSkip}>
        <Text className={"text-white text-sm font-gfMedium"}>
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingHeader;
