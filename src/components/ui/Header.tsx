import { useHaptic } from "@/hooks/useHaptic";
import React, { ReactNode } from "react";
import { Pressable, View } from "react-native";
import { Divider, IconButton, Text, useTheme } from "react-native-paper";

interface HeaderProps {
  backPressed: () => void;
  backgroundColor: string;
  bottomLine?: boolean;
  backColor?: string;
  backPressedColor?: string;
  children?: ReactNode;
}

export function Header({
  backPressed,
  backgroundColor,
  bottomLine,
  backColor,
  backPressedColor,
  children,
}: HeaderProps) {
  const theme = useTheme();
  const hapticSelection = useHaptic();

  function handleBackPressed() {
    hapticSelection();
    backPressed();
  }

  return (
    <View
      style={{
        height: 60,
        backgroundColor: backgroundColor,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          gap: 16,
          marginLeft: 8,
        }}
      >
        <Pressable
          onPress={handleBackPressed}
          hitSlop={100}
          style={({ pressed }) => [
            {
              flexDirection: "row",
              alignItems: "center",
              width: 40,
            },
          ]}
        >
          {({ pressed }) => (
            <IconButton
              icon="chevron-left"
              size={25}
              iconColor={pressed ? backPressedColor : backColor}
            />
          )}
        </Pressable>
        {children}
      </View>
      {bottomLine && <Divider />}
    </View>
  );
}
