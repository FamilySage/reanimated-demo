import { useNavigation } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { Prompt } from "@/types/Insight";
import Animated from "react-native-reanimated";
import InsightBubble from "./InsightBubble";
import { usePrompt } from "@/contexts/promptContext";

interface PromptItemProps {
  item: Prompt;
}

const PromptItem: React.FC<PromptItemProps> = ({ item }) => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const { setPrompt } = usePrompt();

  const firstInsight = useMemo(() => {
    if (item.insights) {
      item.insights?.sort((a, b) => a.ranking - b.ranking);
      return item.insights[0];
    }
  }, [item]);

  function promptItemPressed() {
    setPrompt(item);
    navigation.navigate("(main)", {
      screen: "insights/list",
      initial: false,
    });
  }

  return (
    <View style={styles.itemContainer}>
      <Animated.View sharedTransitionTag="promptText" style={{ gap: 4 }}>
        <Text variant="headlineMedium">{item.text}</Text>
        <Text
          style={{ color: theme.colors.onSurfaceDisabled }}
          variant="labelSmall"
        >
          Placeholder
        </Text>
      </Animated.View>
      <Pressable onPress={promptItemPressed}>
        {firstInsight && (
          <InsightBubble insight={firstInsight} category={item.category} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 40,
    gap: 12,
    backgroundColor: "white",
  },
});

export default PromptItem;
