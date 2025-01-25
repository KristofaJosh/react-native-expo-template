import { router, useLocalSearchParams } from "expo-router";
import { RefObject, useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";

import Typography from "@/components/ui/typography";
import { useAppSelector } from "@/hooks/redux";
import { selectExploreState } from "@/reducers/explore/reducer";
import { createImageLink } from "@/utils/createImageLink";
import { cn } from "@/utils/tw-merge";

const animateScroll = (ref: RefObject<FlatList>) => {
  const offset = 100; // Adjust how far to scroll
  const duration = 1000;

  Animated.timing(new Animated.Value(0), {
    toValue: 1,
    duration,
    useNativeDriver: false,
  }).start(() => {
    ref.current?.scrollToOffset({ offset, animated: true });

    // Scroll back to the right
    setTimeout(() => {
      ref.current?.scrollToOffset({ offset: 0, animated: true });
    }, duration);
  });
};

const ArtId = () => {
  const [fullImage, setShowFullImage] = useState(false);

  const { width } = useWindowDimensions();
  const { art_id } = useLocalSearchParams();
  const { data } = useAppSelector(selectExploreState);

  const listRef = useRef<FlatList>(null);

  const activeArt = data[Number(art_id)];

  const images = [activeArt.image_id].concat(activeArt.alt_image_ids);

  useEffect(() => {
    if (images.length > 1) animateScroll(listRef);
  }, []);

  return (
    <ScrollView className={"bg-white p-4 flex-1"}>
      <View className={"pb-8"}>
        <TouchableOpacity className={"rounded w-10"} onPress={router.back}>
          <Typography className={"text-sm font-medium"}>Back</Typography>
        </TouchableOpacity>
      </View>
      <View
        className={cn(
          "relative h-80 mb-2 rounded-3xl overflow-hidden",
          "border border-gray-300",
        )}
      >
        <FlatList
          ref={listRef}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          data={images}
          keyExtractor={(image_id) => image_id}
          renderItem={({ item }) => {
            return (
              <TouchableWithoutFeedback
                onLongPress={() => setShowFullImage(!fullImage)}
              >
                <Image
                  style={{ width: width - 30 }}
                  className={cn(
                    "w-full h-full",
                    fullImage && "h-[90%] my-auto",
                  )}
                  resizeMode={fullImage ? "center" : "cover"}
                  source={{
                    uri: createImageLink({
                      image_id: item,
                      quality: 600,
                    }),
                  }}
                />
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
      <Typography className={"text-xs font-medium text-right"}>
        Long press image to toggle view
      </Typography>
      <Typography className={"text-2xl font-medium py-4 underline"}>
        {activeArt.title}
      </Typography>
      <View>
        <Typography className={"text-lg font-medium"}>Description</Typography>
        <Typography>
          {activeArt?.description?.toString() ||
            activeArt?.alt_titles?.toString()}
        </Typography>
      </View>
    </ScrollView>
  );
};

export default ArtId;
