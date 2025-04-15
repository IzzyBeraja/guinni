import { Text } from "react-native";
import type { GuiTheme } from "@/hooks/useGuiTheme";
import { useGuiTheme } from "@/hooks/useGuiTheme";

interface Props extends React.ComponentProps<typeof Text> {
  color?: keyof GuiTheme["textColor"];
  size?: number;
}

export function GuiText({ size = 12, color = "primary", ...rest }: Props) {
  const theme = useGuiTheme();

  return (
    <Text style={{ fontSize: size, color: theme.textColor[color] }} {...rest} />
  );
}
