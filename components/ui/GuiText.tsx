import { Text } from "react-native";
import type { GuiTextColor, GuiTextSize } from "@/hooks/useGuiTheme";
import { useGuiTheme } from "@/hooks/useGuiTheme";

interface Props extends React.ComponentProps<typeof Text> {
  color?: GuiTextColor;
  size?: GuiTextSize;
}

export function GuiText({
  size = "medium",
  color = "primary",
  ...rest
}: Props) {
  const theme = useGuiTheme();

  return (
    <Text
      style={{ fontSize: theme.textSize[size], color: theme.textColor[color] }}
      {...rest}
    />
  );
}
