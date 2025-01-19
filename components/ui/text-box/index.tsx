import { Text, TextInput, TextInputProps, View } from "react-native";

import { cn } from "@/utils/tw-merge";

interface TextboxProps extends TextInputProps {
  label: string;
  labelClassName?: string;
}

const Textbox = ({ label, className, labelClassName, ...rest  }: TextboxProps) => {
  return (
    <View>
      <Text className={cn('text-sm capitalize font-semibold mb-1', labelClassName)}>{label}</Text>
      <TextInput className={cn("w-full min-w-full p-3 border border-black rounded-lg", className)} {...rest}/>
    </View>
  );
};

export default Textbox;