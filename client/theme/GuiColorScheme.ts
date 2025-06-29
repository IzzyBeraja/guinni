export type GuiColorScheme = "light" | "dark";
export type GuiThemedColors<T> = { [K in GuiColorScheme]: T };
