import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = React.ComponentProps<typeof MaterialIcons>;

export function GuiIcon({ size = 24, ...rest }: Props) {
  return <MaterialIcons size={size} {...rest} />;
}
