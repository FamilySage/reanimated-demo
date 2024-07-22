import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Modal,
  Button,
  Text,
  TextInput,
  Portal,
  useTheme,
  IconButton,
} from "react-native-paper";

export default function Settings() {
  const theme = useTheme();

  return (
    <View style={styles(theme.colors).container}>
      <Text>Profile</Text>
    </View>
  );
}

const profileImageSize = 200;
const profileBorderWidth = 5;

const styles = (colors: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: "white",
      flex: 1,
      gap: 68,
    },
    fieldsContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
      flex: 1,
      gap: 16,
    },
    verticallySpaced: {
      paddingTop: 4,
      paddingBottom: 4,
      alignSelf: "stretch",
    },
    mt20: {
      marginTop: 20,
    },
    image: {
      width: profileImageSize - 2 * profileBorderWidth,
      height: profileImageSize - 2 * profileBorderWidth,
      borderRadius: (profileImageSize - 2 * profileBorderWidth) / 2,
      overflow: "hidden",
    },
    imageButton: {
      position: "absolute",
      right: 8,
      bottom: 0,
      zIndex: 2,
      borderWidth: 2,
      borderColor: "white",
      backgroundColor: colors.tertiaryContainer,
    },
    modalStyle: {
      backgroundColor: "white",
      padding: 24,
      borderRadius: 16,
      marginHorizontal: 32,
      gap: 16,
    },
  });
