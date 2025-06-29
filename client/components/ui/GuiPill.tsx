import { useGuiTheme } from "@/hooks/useGuiTheme";
import type { GuiPillColors, GuiPillSize } from "@/theme/GuiPillTheme";
import { GuiView } from "@/components/ui/GuiView";
import { Text } from "react-native";

interface Props extends React.ComponentProps<typeof GuiView> {
  text: string;
  size?: keyof GuiPillSize;
  color?: keyof GuiPillColors["background"];
}

export function GuiPill({
  text,
  size = "medium",
  color = "primary",
  style,
  ...rest
}: Props) {
  const { pill } = useGuiTheme();

  return (
    <GuiView
      style={[
        {
          backgroundColor: pill.colors.background[color],
          borderRadius: "25%",
          paddingHorizontal: pill.size[size] / 2,
          paddingVertical: pill.size[size] / 4,
        },
        style,
      ]}
      {...rest}
    >
      <Text
        style={{ color: pill.colors.text[color], fontSize: pill.size[size] }}
      >
        {text}
      </Text>
    </GuiView>
  );
}
