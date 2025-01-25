import { Text, TextInput, TextInputProps, View } from "react-native";

import { cn } from "@/utils/tw-merge";

interface TextboxProps extends TextInputProps {
  label: string;
  labelClassName?: string;
}

const Textbox = ({
  label,
  className,
  labelClassName,
  placeholder,
  ...rest
}: TextboxProps) => {
  return (
    <View>
      <Text
        className={cn("text-sm capitalize font-semibold mb-1", labelClassName)}
      >
        {label}
      </Text>
      <TextInput
        placeholder={placeholder ?? label}
        className={cn(
          "w-full min-w-full p-3 border border-black rounded-lg",
          !placeholder && "placeholder:text-transparent",
          className,
        )}
        {...rest}
      />
    </View>
  );
};

export default Textbox;
