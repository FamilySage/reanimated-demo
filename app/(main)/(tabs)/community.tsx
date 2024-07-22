import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function CommunityHome() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text> Hello world</Text>
    </View>
  );
}

function empty() {
  return <></>;
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 32,
    gap: 16,
  },
});
