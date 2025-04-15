import { SafeAreaView } from "react-native-safe-area-context";

type Props = React.ComponentProps<typeof SafeAreaView>;

export function GuiScreen({ children, ...rest }: Props) {
  return <SafeAreaView {...rest}>{children}</SafeAreaView>;
}
