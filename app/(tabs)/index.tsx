import { GuiButton } from "@/components/ui/GuiButton";
import { GuiScreen } from "@/components/ui/GuiScreen";
import { GuiText } from "@/components/ui/GuiText";

export default function HomeScreen() {
  return (
    <GuiScreen style={{ alignItems: "center" }}>
      <GuiButton fullWidth onPress={() => console.log("Button Pressed!")}>
        <GuiText>Hello</GuiText>
      </GuiButton>
      <GuiText color="secondary">World</GuiText>
    </GuiScreen>
  );
}
