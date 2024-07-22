import React from "react";
import { Text, useTheme } from "react-native-paper";
import { Insight, PromptCategory } from "@/types/Insight";
import Animated from "react-native-reanimated";

interface InsightBubbleProps {
  insight: Insight;
  category: PromptCategory;
  index?: number;
}

export default function InsightBubble({
  insight,
  category,
  index = 1,
}: InsightBubbleProps) {
  const theme = useTheme();
  return (
    <Animated.View
      sharedTransitionTag={insight.id}
      style={{
        padding: 16,
        paddingBottom: 24,
        borderRadius: 8,
        backgroundColor: "#CAF3D9",
        minHeight: 300,
      }}
    >
      <Text variant="displayLarge">#{index}</Text>
      <Text variant="bodyLarge">{insight.text}</Text>
    </Animated.View>
  );
}
