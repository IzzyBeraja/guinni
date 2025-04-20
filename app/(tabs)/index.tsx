import { GuiText } from "@/components/ui/GuiText";
import { GuiView } from "@/components/ui/GuiView";
import { GuiScreen } from "@/components/ui/GuiScreen";
import { GuiButton } from "@/components/ui/GuiButton";
import { GuiPill } from "@/components/ui/GuiPill";

export default function HomeScreen() {
  return (
    <GuiScreen>
      <GuiView
        style={{
          alignItems: "center",
        }}
      >
        <GuiButton fullWidth onPress={() => console.log("Button Pressed!")}>
          <GuiText>Hello</GuiText>
        </GuiButton>
        <GuiText color="secondary">World</GuiText>
        <GuiPill size="small" text="Hello" />
        <GuiPill text="Hello" />
        <GuiPill size="large" text="Hello" />
      </GuiView>
    </GuiScreen>
  );
}
