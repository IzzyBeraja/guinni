import { GuiView } from "@/components/ui/GuiView";
import { useGuiTheme } from "@/hooks/useGuiTheme";
import type { GuiProfileSize } from "@/theme/GuiProfileTheme";
import { useMemo } from "react";
import { Image, ImageSourcePropType, Text } from "react-native";

interface Props extends React.ComponentProps<typeof GuiView> {
  image?: ImageSourcePropType;
  name: string;
  size?: keyof GuiProfileSize;
}

export function GuiProfile({ image, name, size = "medium", ...rest }: Props) {
  const { profile } = useGuiTheme();
  const profileName = useMemo(
    () =>
      name
        .split(" ")
        .filter(Boolean)
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [name]
  );

  return (
    <GuiView
      style={{
        width: profile.size[size],
        height: profile.size[size],
        borderRadius: profile.size[size],
        overflow: "hidden",
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...rest}
    >
      {image ? (
        <Image source={image} />
      ) : (
        <Text style={{ fontSize: profile.size[size] / 2 }}>{profileName}</Text>
      )}
    </GuiView>
  );
}
