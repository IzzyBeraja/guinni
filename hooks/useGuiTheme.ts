import { guiBackgroundTheme, GuiBackgroundTheme } from "@/theme/GuiBackgroundTheme";
import { GuiButtonTheme, guiButtonTheme } from "@/theme/GuiButtonTheme";
import { guiIconTheme } from "@/theme/GuiIconTheme";
import { GuiPillTheme, guiPillTheme } from "@/theme/GuiPillTheme";
import { GuiProfileTheme, guiProfileTheme } from "@/theme/GuiProfileTheme";
import { GuiSpacingTheme, guiSpacingTheme } from "@/theme/GuiSpacingTheme";
import { GuiTextTheme, guiTextTheme } from "@/theme/GuiTextTheme";
import { useMemo } from "react";
import { useColorScheme } from "react-native";

export interface GuiThemeColors {
  background: string;
}

export type GuiTheme = {
  background: GuiBackgroundTheme;
  pill: GuiPillTheme;
  button: GuiButtonTheme;
  text: GuiTextTheme;
  profile: GuiProfileTheme;
  spacing: GuiSpacingTheme;
};

export function useGuiTheme() {
  const scheme = useColorScheme() ?? "light";
  return useMemo(() => {
    return {
      background: guiBackgroundTheme(scheme),
      text: guiTextTheme(scheme),
      button: guiButtonTheme(scheme),
      pill: guiPillTheme(scheme),
      profile: guiProfileTheme(),
      spacing: guiSpacingTheme(),
      icon: guiIconTheme(scheme),
    };
  }, [scheme]);
}
