import { Text } from "react-native";

interface Props extends React.ComponentProps<typeof Text> {
  size?: number;
}

export function GuiText({ size = 12, ...rest }: Props) {
  return <Text style={{ fontSize: size }} {...rest} />;
}
