import { GuiColorScheme, GuiThemedColors } from "@/theme/GuiColorScheme";

export interface GuiIconSize {
  small: number;
  medium: number;
  large: number;
  tab: number;
}

export interface GuiIconColors {
  primary: string;
  secondary: string;
  tab: string;
  tabFocused: string;
}

export interface GuiIconTheme {
  size: GuiIconSize;
  colors: GuiIconColors;
}

const guiIconSize = {
  small: 24,
  tab: 28,
  medium: 36,
  large: 64,
} as const satisfies GuiIconSize;

const guiIconColors = {
  light: {
    primary: "#000000",
    secondary: "#606060",
    tab: "#8E8E8F",
    tabFocused: "#0a7ea4",
  },
  dark: {
    primary: "#ffffff",
    secondary: "#bfbfbf",
    tab: "#8E8E8F",
    tabFocused: "#0a7ea4",
  },
} as const satisfies GuiThemedColors<GuiIconColors>;

export function guiIconTheme(colorScheme: GuiColorScheme): GuiIconTheme {
  return {
    size: guiIconSize,
    colors: guiIconColors[colorScheme],
  };
}
