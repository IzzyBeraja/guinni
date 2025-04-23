import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { GuiIcon } from "@/components/ui/GuiIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: { paddingTop: 4 },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <GuiIcon size="tab" name="home-filled" color={focused ? "tabFocused" : "tab"} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ focused }) => (
            <GuiIcon size="tab" name="camera-alt" color={focused ? "tabFocused" : "tab"} />
          ),
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "Me",
          tabBarIcon: ({ focused }) => (
            <GuiIcon size="tab" name="person" color={focused ? "tabFocused" : "tab"} />
          ),
        }}
      />
    </Tabs>
  );
}
