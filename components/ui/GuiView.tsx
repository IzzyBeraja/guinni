import { useGuiTheme } from "@/hooks/useGuiTheme";
import type { ViewProps } from "react-native";
import { View } from "react-native";

type Props = ViewProps;

export function GuiView({ children, style, ...rest }: Props) {
  const { background } = useGuiTheme();

  return (
    <View style={[{ backgroundColor: background.colors.default }, style]} {...rest}>
      {children}
    </View>
  );
}
