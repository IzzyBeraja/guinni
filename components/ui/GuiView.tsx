import type { ViewProps } from "react-native";
import { View } from "react-native";

type Props = ViewProps;

export function GuiView({ ...rest }: Props) {
  return <View {...rest} />;
}
