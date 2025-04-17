import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { PixelRatio } from "react-native";

export interface GuiThemeSizes {
  spacingSize: {
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };
  textSize: {
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };
}

export interface GuiThemeColors {
  backgroundColor: string;
  buttonColor: {
    primary: string;
    secondary: string;
    warning: string;
    error: string;
    success: string;
  };
  textColor: {
    primary: string;
    secondary: string;
  };
}

export interface GuiTheme extends GuiThemeSizes, GuiThemeColors {}
export type GuiSpacing = keyof GuiThemeSizes["spacingSize"];
export type GuiTextSize = keyof GuiThemeSizes["textSize"];
export type GuiButtonColor = keyof GuiThemeColors["buttonColor"];
export type GuiTextColor = keyof GuiThemeColors["textColor"];

const sizes = {
  spacingSize: {
    xxsmall: 2,
    xsmall: 4,
    small: 8,
    medium: 16,
    large: 32,
    xlarge: 64,
    xxlarge: 128,
  },
  textSize: {
    xxsmall: 10,
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 34,
    xxlarge: 48,
  },
} as const satisfies GuiThemeSizes;

const colors = {
  light: {
    backgroundColor: "#ffffff",
    buttonColor: {
      primary: "#2196F3",
      secondary: "#f6f6f6",
      warning: "#ff9800",
      error: "#b00020",
      success: "#4CAF50",
    },
    textColor: {
      primary: "#000000",
      secondary: "#606060",
    },
  },
  dark: {
    backgroundColor: "#4a4a4a",
    buttonColor: {
      primary: "#2196F3",
      secondary: "#f6f6f6",
      warning: "#ff9800",
      error: "#b00020",
      success: "#4CAF50",
    },
    textColor: {
      primary: "#ffffff",
      secondary: "#bfbfbf",
    },
  },
} as const satisfies Record<"light" | "dark", GuiThemeColors>;

export function useGuiTheme(): GuiTheme {
  const scheme = useColorScheme() ?? "light";
  return useMemo(() => ({ ...colors[scheme], ...sizes }), [scheme]);
}
