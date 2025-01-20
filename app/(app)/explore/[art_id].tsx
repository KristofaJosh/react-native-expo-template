import { useLocalSearchParams } from "expo-router";
import { Text,View } from "react-native";

const ArtId = () => {
  const params = useLocalSearchParams();
  console.log(params);
  return (
    <View>
      <Text>Art</Text>
    </View>
  );
};

export default ArtId;
