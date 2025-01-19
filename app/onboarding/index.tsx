import { usePathname } from "expo-router";
import { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  useWindowDimensions,
  View,
  ViewToken,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { handleSkipOnboarding } from "@/components/onboarding/actions";
import Footer from "@/components/onboarding/footer";
import Header from "@/components/onboarding/header";
import { onboardSlideData } from "@/components/onboarding/onboard-slide-data";
import { RenderItem } from "@/components/onboarding/render-item";
import Button from "@/components/ui/button";

const Onboarding = () => {
  const insets = useSafeAreaInsets();

  const dimensions = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollXref = useRef(new Animated.Value(0)).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 40 }).current;

  const onViewableItemChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0]?.index || 0);
    },
  ).current;

  const s = usePathname();
  console.log(s);
  return (
    <View>
      <View
        style={{
          position: "absolute",
          top: insets.top,
          left: 16,
          right: 16,
          zIndex: 1,
        }}
      >
        <Header onSkip={handleSkipOnboarding} />
      </View>
      <FlatList
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
        style={{
          position: "absolute",
          bottom: insets.bottom,
          left: 16,
          right: 16,
          zIndex: 1,
        }}
      >
        <View style={{ marginBottom: 90 }}>
          <Footer current={currentIndex} data={onboardSlideData} />
        </View>
        <Button style={{
          right: 16,
          backgroundColor: "red",
        }}>Next</Button>
      </View>
    </View>
  );
};

export default Onboarding;
