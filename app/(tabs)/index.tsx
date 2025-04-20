import { GuiText } from "@/components/ui/GuiText";
import { GuiView } from "@/components/ui/GuiView";
import { GuiScreen } from "@/components/ui/GuiScreen";
import { GuiButton } from "@/components/ui/GuiButton";
import { GuiProfile } from "@/components/ui/GuiProfile";

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
        <GuiProfile size="small" name="Izzy Beraja" />
        <GuiProfile size="medium" name="Izzy Beraja" />
        <GuiProfile size="large" name="Izzy Beraja" />
      </GuiView>
    </GuiScreen>
  );
}
