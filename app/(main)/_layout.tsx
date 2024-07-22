import React from "react";
import { Stack } from "expo-router";
import { PromptProvider } from "@/contexts/promptContext";

export default function Main() {
  return (
    <PromptProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="insights/list"
          options={{
            animation: "fade",
            presentation: "transparentModal",
            headerShown: false,
          }}
        />
      </Stack>
    </PromptProvider>
  );
}
