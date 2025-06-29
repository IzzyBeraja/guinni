export interface GuiSpacingSize {
  xxsmall: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
}

export interface GuiSpacingTheme {
  size: GuiSpacingSize;
}

const guiSpacingSize = {
  xxsmall: 10,
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 20,
  xlarge: 34,
  xxlarge: 48,
} as const satisfies GuiSpacingSize;

export function guiSpacingTheme(): GuiSpacingTheme {
  return {
    size: guiSpacingSize,
  };
}
