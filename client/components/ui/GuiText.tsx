import { Text } from "react-native";
import type { GuiTextColors, GuiTextSize } from "@/theme/GuiTextTheme";
import { useGuiTheme } from "@/hooks/useGuiTheme";

interface Props extends React.ComponentProps<typeof Text> {
  color?: keyof GuiTextColors;
  size?: keyof GuiTextSize;
}

export function GuiText({
  size = "medium",
  color = "primary",
  ...rest
}: Props) {
  const { text } = useGuiTheme();

  return (
    <Text
      style={{ fontSize: text.size[size], color: text.colors[color] }}
      {...rest}
    />
  );
}
