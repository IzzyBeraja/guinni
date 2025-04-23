import { useGuiTheme } from "@/hooks/useGuiTheme";
import { View } from "react-native";

type Props = React.ComponentProps<typeof View>;

export function GuiScreen({ style, children, ...rest }: Props) {
  const { background } = useGuiTheme();
  return (
    <View style={[{ flex: 1, backgroundColor: background.colors.default }, style]} {...rest}>
      {children}
    </View>
  );
}
