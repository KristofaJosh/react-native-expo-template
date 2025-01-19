import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Text,
  useWindowDimensions,
  View,
  ViewToken,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import Footer from "@/components/onboarding/footer";
import { onboardSlideData } from "@/components/onboarding/onboard-slide-data";
import { RenderItem } from "@/components/onboarding/render-item";
import Button from "@/components/ui/button";

const viewConfig = { viewAreaCoveragePercentThreshold: 40 };

const Onboarding = () => {
  const insets = useSafeAreaInsets();

  const dimensions = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);

  const listRef = useRef<FlatList>(null);
  const scrollXref = useRef(new Animated.Value(0)).current;

  const onViewableItemChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0]?.index || 0);
    },
  ).current;

  const handleOnboardNav = () => {
    if (currentIndex < onboardSlideData.length - 1) {
      listRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex + 1
      })
      return
    }
    router.replace("/onboarding/auth");
  };

  return (
    <SafeAreaView className={"flex-1 p-4"}>
      <Text className={"text-5xl text-white font-bold z-10 shadow"}>
        Artify
      </Text>

      <FlatList
        ref={listRef}
        style={{ width: dimensions.width, height: dimensions.height }}
        className={"absolute bottom-0"}
        data={onboardSlideData}
        renderItem={(props) => <RenderItem {...props} />}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollXref } } }],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={onViewableItemChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
      />
      <View
        className={"absolute bottom-0 left-0 right-0"}
        style={{
          bottom: insets.bottom,
        }}
      >
        <Footer current={currentIndex} data={onboardSlideData} />
        <View className={"mb-20"} />
        <Button
          className={"absolute w-[90px] bottom-0 right-4"}
          onPress={handleOnboardNav}
        >
          {currentIndex < onboardSlideData.length - 1 ? "Next" : "Get Started"}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
