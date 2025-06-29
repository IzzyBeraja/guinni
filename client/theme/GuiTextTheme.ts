import { GuiColorScheme, GuiThemedColors } from "@/theme/GuiColorScheme";

export interface GuiTextSize {
  xxsmall: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
}

export interface GuiTextColors {
  primary: string;
  secondary: string;
}

export interface GuiTextTheme {
  size: GuiTextSize;
  colors: GuiTextColors;
}

const guiTextSize = {
  xxsmall: 10,
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 20,
  xlarge: 34,
  xxlarge: 48,
} as const satisfies GuiTextSize;

const guiTextColors = {
  light: {
    primary: "#000000",
    secondary: "#606060",
  },
  dark: {
    primary: "#ffffff",
    secondary: "#bfbfbf",
  },
} as const satisfies GuiThemedColors<GuiTextColors>;

export function guiTextTheme(colorScheme: GuiColorScheme): GuiTextTheme {
  return {
    size: guiTextSize,
    colors: guiTextColors[colorScheme],
  };
}
