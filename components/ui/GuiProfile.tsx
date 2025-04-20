import { GuiView } from "@/components/ui/GuiView";
import { GuiProfileSize, useGuiTheme } from "@/hooks/useGuiTheme";
import { useMemo } from "react";
import { Image, Text, ImageSourcePropType } from "react-native";

interface Props extends React.ComponentProps<typeof GuiView> {
  image?: ImageSourcePropType;
  name: string;
  size?: GuiProfileSize;
}

export function GuiProfile({ image, name, size = "medium", ...rest }: Props) {
  const { profile } = useGuiTheme();
  const profileName = useMemo(
    () =>
      name
        .split(" ")
        .filter(Boolean)
        .map(n => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [name]
  );

  return (
    <GuiView
      style={{
        width: profile[size],
        height: profile[size],
        borderRadius: profile[size],
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
        <Text style={{ fontSize: profile[size] / 2 }}>{profileName}</Text>
      )}
    </GuiView>
  );
}
