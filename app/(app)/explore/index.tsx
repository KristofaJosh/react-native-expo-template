import { Link } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Typography from "@/components/ui/typography";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  getArtworks,
  getIsRefreshing,
  selectExploreState,
  setRefreshing,
} from "@/reducers/explore/reducer";
import { createImageLink } from "@/utils/createImageLink";

const trimTitle = (title: string) => {
  if (title.length > 30) {
    return `${title.slice(0, 30)}...`;
  }
  return title;
};

const Explore = () => {
  const refreshing = useAppSelector(getIsRefreshing);

  const { bottom } = useSafeAreaInsets();

  const dispatch = useAppDispatch();

  const {
    isLoading: loading,
    data: artworks,
    pagination, // infinite scroll with this
  } = useAppSelector(selectExploreState);

  useEffect(() => {
    dispatch(getArtworks());
  }, []);

  return (
    <View className={"flex-1 p-4 relative bg-white"}>
      <Typography className={"text-2xl font-semibold py-4"}>Explore</Typography>
      {loading && (
        <View className={"justify-center items-center h-[80%] w-full"}>
          <ActivityIndicator />
        </View>
      )}
      <FlatList
        className={""}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => dispatch(setRefreshing())}
          />
        }
        data={artworks}
        renderItem={({ item, ...props }) => (
          <Link href={`/explore/${item.id}`} asChild>
            <View
              className={
                "relative h-80 mb-8 rounded-3xl overflow-hidden border border-gray-300 shadow"
              }
            >
              <Image
                className={"absolute w-full h-full"}
                blurRadius={2}
                resizeMode="cover"
                alt={item.thumbnail?.alt_text}
                source={{
                  uri:
                    createImageLink({
                      image_id: item.image_id,
                      quality: 600,
                    }) ?? item.thumbnail?.lqip,
                }}
              />
              <View
                className={
                  "absolute h-full w-full bg-black opacity-40 bottom-0 right-0 left-0 top-0"
                }
              />
              <View className={"z-10 p-4 absolute bottom-0 left-0"}>
                <Typography
                  className={"font-semibold text-xl text-white shadow"}
                >
                  {trimTitle(item.title) ?? "Untitled"}
                </Typography>
                <Typography className={"font-medium text-white shadow"}>
                  {item.artist_title ?? "Unknown Artist"}
                </Typography>
              </View>
            </View>
          </Link>
        )}
        keyExtractor={(item) => `${item.id}`}
        scrollEventThrottle={32}
      />
      <View style={{ height: bottom + 20 }} />
    </View>
  );
};

export default Explore;
