import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Divider, Text } from "react-native-paper";
import { Prompt } from "@/types/Insight";
import PromptItem from "@/components/ui/PromptItem";

const fakePrompts = [
  {
    category: 2,
    insights: [
      {
        id: "89f6086f-8baa-4d3b-bf14-7971d7d1b6e9",
        ranking: 0.7,
        summary_id: "01ef380a-531e-4636-a8bb-21d425551bac",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo",
      },
      {
        id: "ebb0b00a-9be4-46a3-9d8c-b1ec34807ebe",
        ranking: 0.9,
        summary_id: "74b03588-c477-42eb-8b70-edbba47ff484",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo",
      },
    ],
    template_id: "ce8a1914-91f9-4ed9-b74c-9f942724ed27",
    text: "This is an example title",
  },
];

export default function InsightsTab() {
  const [loading, setLoading] = useState(false);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  async function loadInsights() {
    setRefreshing(true);
    try {
      setPrompts(fakePrompts);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadInsights();
  }, []);

  const renderItem: ListRenderItem<Prompt> = ({ item }) => {
    return <PromptItem item={item} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingTop: 16, gap: 12 }}>
          <Text style={{ paddingHorizontal: 16 }} variant="displayMedium">
            Title
          </Text>
          <Divider />
        </View>
        <FlatList
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator animating={loading} />
            ) : (
              <Text variant="bodyLarge">No insights yet!</Text>
            )
          }
          data={prompts}
          keyExtractor={(item) => item.template_id}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadInsights} />
          }
        />
      </SafeAreaView>
    </View>
  );
}

const styles = (colors: any) =>
  StyleSheet.create({
    secondary: {
      color: colors.onSurfaceDisabled,
    },
  });
