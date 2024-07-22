import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useNavigation } from "expo-router";
import { Header } from "@/components/ui/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, useTheme } from "react-native-paper";
import { Insight } from "@/types/Insight";
import Animated from "react-native-reanimated";
import InsightBubble from "@/components/ui/InsightBubble";
import { usePrompt } from "@/contexts/promptContext";
import { FlatList } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;

export default function InsightsDetail() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const { prompt } = usePrompt();

  function backPressed() {
    navigation.pop();
  }

  function renderItem(index: number, insight: Insight) {
    return (
      <View style={{ marginTop: 32, height: 400, width: width - 80 }}>
        <InsightBubble
          insight={insight}
          category={prompt!.category}
          index={index + 1}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: insets.top }}>
      <Header backPressed={backPressed} backgroundColor={"white"} />
      <View style={{ paddingHorizontal: 40, paddingTop: 16 }}>
        <Animated.View sharedTransitionTag="promptText" style={{ gap: 4 }}>
          <Text variant="headlineMedium">{prompt?.text}</Text>
          <Text
            style={{ color: theme.colors.onSurfaceDisabled }}
            variant="labelSmall"
          >
            Placeholder
          </Text>
        </Animated.View>
      </View>
      {prompt && prompt.insights && (
        <FlatList
          horizontal={true}
          decelerationRate="fast"
          snapToAlignment="center"
          snapToInterval={width - 80}
          data={prompt.insights}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          ListFooterComponent={() => <View style={{ width: 40 }} />}
          ListHeaderComponent={() => <View style={{ width: 40 }} />}
          renderItem={({ index, item }) => {
            return renderItem(index, item);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
