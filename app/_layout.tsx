import { Stack } from "expo-router";
import { PaperProvider, Provider } from "react-native-paper";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

function WrappedApp() {
  return (
    <Stack screenOptions={{ headerShown: false, statusBarColor: "white" }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function AppLayout() {
  return (
    <Provider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <SafeAreaProvider>
            <WrappedApp />
          </SafeAreaProvider>
        </PaperProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
