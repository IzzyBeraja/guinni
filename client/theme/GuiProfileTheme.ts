export interface GuiProfileSize {
  small: number;
  medium: number;
  large: number;
}

export interface GuiProfileTheme {
  size: GuiProfileSize;
}

const guiProfileSize = {
  small: 24,
  medium: 36,
  large: 64,
} as const satisfies GuiProfileSize;

export function guiProfileTheme(): GuiProfileTheme {
  return {
    size: guiProfileSize,
  };
}
