import { GuiButton } from "@/components/ui/GuiButton";
import { GuiText } from "@/components/ui/GuiText";

export default function MeScreen() {
  return (
    <GuiButton onPress={() => console.log("Pressed profile")}>
      <GuiText>Me</GuiText>
    </GuiButton>
  );
}
