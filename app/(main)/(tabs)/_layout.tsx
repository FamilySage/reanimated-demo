import React from "react";
import { Tabs } from "expo-router";
import { Icon, useTheme } from "react-native-paper";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "#a1a1a1",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="community"
        options={{
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <Icon source="account-group" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <Icon source="script" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <Icon source="message" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <Icon source="account" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
