import { Text, View } from "react-native";

/**
 * Show the logged user and other users to illustrate fetching data from the server.
 * @return {JSX.Element}
 * @constructor
 */
export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Main apps.</Text>
    </View>
  );
}
