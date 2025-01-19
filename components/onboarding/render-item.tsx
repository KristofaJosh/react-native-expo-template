import { Image, ImageSourcePropType, useWindowDimensions, View } from "react-native";

import { cn } from "@/utils/tw-merge";

export const RenderItem = ({ item }: { item: { backgroundImage: ImageSourcePropType } }) => {
  const dimensions = useWindowDimensions();

  return (
    <View
      style={{ width: dimensions.width, height: dimensions.height }}
      className={cn("flex flex-1 justify-center items-center")}
    >
      <Image
        source={item.backgroundImage}
        style={{ height: dimensions.height }}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
};
