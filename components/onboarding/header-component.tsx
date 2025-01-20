import { Text, TouchableOpacity, View } from "react-native";
import { StyleProps } from "react-native-reanimated";

import { cn } from "@/utils/tw-merge";

const OnboardingHeader = ({
  onSkip,
  className,
  style,
}: {
  onSkip: () => void;
  className?: string;
  style?: StyleProps
}) => {
  return (
    <View
      style={style}
      className={cn(
        "w-full",
        "justify-between flex-row items-center",
        className,
      )}
    >
      <Text className={'text-4xl text-white font-bold'}>
        Artify
      </Text>
      <TouchableOpacity onPress={onSkip}>
        <Text className={"text-sm text-white font-semibold"}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingHeader;
