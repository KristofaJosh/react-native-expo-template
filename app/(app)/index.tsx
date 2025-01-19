import { View } from "react-native";

import Typography from "@/components/ui/typography";

/**
 * Show the logged user and other users to illustrate fetching data from the server.
 * @return {JSX.Element}
 * @constructor
 */
export default function Home() {
  return (
    <View className='flex-1 bg-white p-4 gap-8'>
      <View>
        <Typography className={'font-semibold text-2xl'}>Good day, Guest</Typography>
        <Typography className={'text-sm font-thin'}>last login: xxxx</Typography>
      </View>
      <View className={'border rounded p-3 h-[80px]'}>
        <Typography>XXXX</Typography>
      </View>
    </View>
  );
}
