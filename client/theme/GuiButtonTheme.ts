import { GuiColorScheme, GuiThemedColors } from "@/theme/GuiColorScheme";

export interface GuiButtonSize {
  tight: number;
  regular: number;
  relaxed: number;
}

export interface GuiButtonColors {
  primary: string;
  secondary: string;
  warning: string;
  error: string;
  success: string;
}

export interface GuiButtonTheme {
  size: GuiButtonSize;
  colors: GuiButtonColors;
}

const guiButtonSize = {
  tight: 4,
  regular: 8,
  relaxed: 16,
} as const satisfies GuiButtonSize;

const guiButtonColors = {
  light: {
    primary: "#2196F3",
    secondary: "#f6f6f6",
    warning: "#ff9800",
    error: "#b00020",
    success: "#4CAF50",
  },
  dark: {
    primary: "#2196F3",
    secondary: "#f6f6f6",
    warning: "#ff9800",
    error: "#b00020",
    success: "#4CAF50",
  },
} as const satisfies GuiThemedColors<GuiButtonColors>;

export function guiButtonTheme(colorScheme: GuiColorScheme): GuiButtonTheme {
  return {
    size: guiButtonSize,
    colors: guiButtonColors[colorScheme],
  };
}
