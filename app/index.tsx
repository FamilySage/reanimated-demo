import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "expo-router";

export default function App() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ padding: 100 }}>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("(main)");
        }}
      >
        Open app
      </Button>
    </View>
  );
}
