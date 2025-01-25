import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { cn } from "@/utils/tw-merge";

interface Props extends TouchableOpacityProps {
  textClassName?: string;
  text?: string;
  isLoading?: boolean;
}

const Button = ({
  children,
  className,
  textClassName,
  text,
  isLoading,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      {...rest}
      className={cn(
        "bg-black items-center p-3 px-4",
        "rounded-md gap-1 justify-center h-[40px]",
        className,
      )}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text className={cn("text-white font-semibold text-sm", textClassName)}>
          {children ?? text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
