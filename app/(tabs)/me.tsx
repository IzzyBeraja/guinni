import { GuiButton } from "@/components/ui/GuiButton";
import { GuiScreen } from "@/components/ui/GuiScreen";
import { GuiText } from "@/components/ui/GuiText";

export default function MeScreen() {
  return (
    <GuiScreen>
      <GuiButton onPress={() => console.log("Pressed profile")}>
        <GuiText>Me</GuiText>
      </GuiButton>
    </GuiScreen>
  );
}
