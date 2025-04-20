import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { GuiText } from "@/components/ui/GuiText";
import { GuiView } from "@/components/ui/GuiView";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <GuiView style={styles.container}>
        <GuiText size="xlarge">This screen doesn't exist.</GuiText>
        <Link href="/" style={styles.link}>
          <GuiText>Go to home screen!</GuiText>
        </Link>
      </GuiView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
