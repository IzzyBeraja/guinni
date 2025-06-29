import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { ReactElement } from "react";
import { useGuiTheme } from "@/hooks/useGuiTheme";
import { GuiButtonColors, GuiButtonSize } from "@/theme/GuiButtonTheme";

interface Props extends PressableProps {
  children: ReactElement;
  size?: keyof GuiButtonSize;
  color?: keyof GuiButtonColors;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export function GuiButton({
  children,
  color = "primary",
  size = "regular",
  fullWidth = false,
  style,
  ...rest
}: Props) {
  const { button } = useGuiTheme();

  return (
    <Pressable
      style={[
        {
          padding: button.size[size],
          backgroundColor: button.colors[color],
          alignItems: "center",
        },
        fullWidth && { alignSelf: "stretch" },
        style,
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
}
