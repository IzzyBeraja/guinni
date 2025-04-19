import { GuiText } from "@/components/ui/GuiText";
import { GuiView } from "@/components/ui/GuiView";
import { GuiScreen } from "@/components/ui/GuiScreen";
import { GuiButton } from "@/components/ui/GuiButton";

export default function HomeScreen() {
  return (
    <GuiScreen>
      <GuiView
        style={{
          alignItems: "center",
          backgroundColor: "yellow",
        }}
      >
        <GuiButton fullWidth onPress={() => console.log("Button Pressed!")}>
          <GuiText>Hello</GuiText>
        </GuiButton>
        <GuiText color="secondary">World</GuiText>
      </GuiView>
    </GuiScreen>
  );
}
