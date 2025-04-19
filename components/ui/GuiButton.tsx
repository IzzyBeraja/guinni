import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { ReactElement } from "react";
import {
  GuiButtonColor,
  GuiButtonSize,
  useGuiTheme,
} from "@/hooks/useGuiTheme";

interface Props extends PressableProps {
  children: ReactElement;
  size?: GuiButtonSize;
  color?: GuiButtonColor;
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
  const { buttonSize, buttonColor } = useGuiTheme();

  return (
    <Pressable
      style={[
        {
          padding: buttonSize[size],
          backgroundColor: buttonColor[color],
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
