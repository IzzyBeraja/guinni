import { useColorScheme } from "react-native";

export type GuiTheme = {
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
};

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
} as const satisfies Record<"light" | "dark", GuiTheme>;

export function useGuiTheme(): GuiTheme {
  const theme = useColorScheme() ?? "light";

  return colors[theme];
}
