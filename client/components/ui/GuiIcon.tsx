import { useGuiTheme } from "@/hooks/useGuiTheme";
import { GuiIconColors, GuiIconSize } from "@/theme/GuiIconTheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type MaterialIconProps = React.ComponentProps<typeof MaterialIcons>;
interface Props {
  size?: keyof GuiIconSize;
  name: MaterialIconProps["name"];
  color?: keyof GuiIconColors;
  style?: MaterialIconProps["style"];
}

export function GuiIcon({
  size = "medium",
  name,
  color = "primary",
  style,
}: Props) {
  const { icon } = useGuiTheme();

  return (
    <MaterialIcons
      size={icon.size[size]}
      name={name}
      color={icon.colors[color]}
      style={style}
    />
  );
}
