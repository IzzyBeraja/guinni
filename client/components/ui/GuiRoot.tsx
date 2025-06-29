import { useGuiTheme } from "@/hooks/useGuiTheme";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = React.ComponentProps<typeof View>;

export function GuiRoot({ style, children, ...rest }: Props) {
  const insets = useSafeAreaInsets();
  const { background } = useGuiTheme();
  return (
    <View
      style={[
        { flex: 1, paddingTop: insets.top, backgroundColor: background.colors.default },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
