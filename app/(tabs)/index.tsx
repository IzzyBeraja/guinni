import { GuiButton } from "@/components/ui/GuiButton";
import { GuiIcon } from "@/components/ui/GuiIcon";
import { GuiText } from "@/components/ui/GuiText";
import { GuiView } from "@/components/ui/GuiView";

export default function HomeScreen() {
  return (
    <GuiView
      style={{
        alignItems: "center",
      }}
    >
      <GuiButton fullWidth onPress={() => console.log("Button Pressed!")}>
        <GuiText>Hello</GuiText>
      </GuiButton>
      <GuiText color="secondary">World</GuiText>
      <GuiIcon name="10k" size="small" />
      <GuiIcon name="10k" />
      <GuiIcon name="zoom-in" size="large" />
    </GuiView>
  );
}
