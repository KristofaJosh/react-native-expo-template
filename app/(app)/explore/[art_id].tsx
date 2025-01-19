import { useSearchParams } from "expo-router/build/hooks";
import { Text,View } from "react-native";

const ArtId = () => {
  const params = useSearchParams();
  console.log(params);
  return (
    <View>
      <Text>Art</Text>
    </View>
  );
};

export default ArtId;
