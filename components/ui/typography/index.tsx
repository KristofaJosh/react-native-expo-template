import { forwardRef } from "react";
import { Text, TextProps } from "react-native";

import { cn } from "@/utils/tw-merge";

interface Props extends TextProps {
  text?: string
}

const Typography = forwardRef<Text, Props>(
  ({ children,text,className, ...rest }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn("text-base font-normal", className)}
        {...rest}
      >
        {text ?? children}
      </Text>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
