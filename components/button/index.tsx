import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { cn } from "@/utils/tw-merge";

interface Props extends TouchableOpacityProps {
  textClassName?: string;
  text?: string;
}

const Button = ({
  children,
  className,
  textClassName,
  text,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      {...rest}
      className={cn(
        "bg-primary items-center p-3 px-1",
        "font-gfMedium rounded-md gap-1 justify-center",
        className,
      )}
    >
      <Text className={cn("text-white font-gfRegular text-sm", textClassName)}>
        {children ?? text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
