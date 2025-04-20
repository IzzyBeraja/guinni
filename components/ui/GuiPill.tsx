import { GuiPillColor, GuiPillSize, useGuiTheme } from "@/hooks/useGuiTheme";
import { GuiView } from "@/components/ui/GuiView";
import { Text } from "react-native";

interface Props extends React.ComponentProps<typeof GuiView> {
  text: string;
  size?: GuiPillSize;
  color?: GuiPillColor;
}

export function GuiPill({
  text,
  size = "medium",
  color = "primary",
  style,
  ...rest
}: Props) {
  const { pillSize, pill } = useGuiTheme();

  return (
    <GuiView
      style={[
        {
          backgroundColor: pill.background[color],
          borderRadius: "25%",
          paddingHorizontal: pillSize[size] / 2,
          paddingVertical: pillSize[size] / 4,
        },
        style,
      ]}
      {...rest}
    >
      <Text style={{ color: pill.text[color], fontSize: pillSize[size] }}>
        {text}
      </Text>
    </GuiView>
  );
}
