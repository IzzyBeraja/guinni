import { GuiColorScheme, GuiThemedColors } from "@/theme/GuiColorScheme";

export interface GuiBackgroundColors {
  default: string;
}

export interface GuiBackgroundTheme {
  colors: GuiBackgroundColors;
}

const guiBackgroundColors = {
  light: {
    default: "#ffffff",
  },
  dark: {
    default: "#424242",
  },
} as const satisfies GuiThemedColors<GuiBackgroundColors>;

export function guiBackgroundTheme(colorScheme: GuiColorScheme): GuiBackgroundTheme {
  return {
    colors: guiBackgroundColors[colorScheme],
  };
}
