import { Pressable } from "react-native";
import { ReactElement } from "react";

interface Props extends React.ComponentProps<typeof Pressable> {
  children: ReactElement;
  size?: number;
  onPress: () => void;
}

export function GuiButton({ children, size = 12, ...rest }: Props) {
  return <Pressable {...rest}>{children}</Pressable>;
}
