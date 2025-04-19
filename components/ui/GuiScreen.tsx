import { SafeAreaView } from "react-native-safe-area-context";

type Props = React.ComponentProps<typeof SafeAreaView>;

export function GuiScreen({ style, children, ...rest }: Props) {
  return (
    <SafeAreaView style={[{ flex: 1 }, style]} {...rest}>
      {children}
    </SafeAreaView>
  );
}
