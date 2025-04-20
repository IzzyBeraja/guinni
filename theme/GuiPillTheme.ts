import { GuiColorScheme, GuiThemedColors } from "@/theme/GuiColorScheme";

export interface GuiPillSize {
  small: number;
  medium: number;
  large: number;
}

export interface GuiPillColors {
  background: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
}

export interface GuiPillTheme {
  size: GuiPillSize;
  colors: GuiPillColors;
}

const guiPillSize = {
  small: 10,
  medium: 12,
  large: 16,
} as const satisfies GuiPillSize;

const guiPillColors = {
  light: {
    background: {
      primary: "rgba(33, 150, 243, 0.2)",
      secondary: "rgba(246, 246, 246, 0.2)",
    },
    text: {
      primary: "#000000",
      secondary: "#303030",
    },
  },
  dark: {
    background: {
      primary: "rgba(33, 150, 243, 0.2)",
      secondary: "rgba(246, 246, 246, 0.2)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a0a0a0",
    },
  },
} as const satisfies GuiThemedColors<GuiPillColors>;

export function guiPillTheme(colorScheme: GuiColorScheme): GuiPillTheme {
  return {
    size: guiPillSize,
    colors: guiPillColors[colorScheme],
  };
}
