import React, { Component, useState } from "react";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import {
  Text,
  Button,
  Divider,
  Surface,
  Title,
  Headline,
  Paragraph,
} from "react-native-paper";

// + HOOKS
import { useColorScheme } from "@hooks";
import { Colors } from "@common";

// + VARIABLES
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen() {
  const theme = useColorScheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Headline style={{ textAlign: "center" }}>Unsaved Changes</Headline>

      <View style={{ marginTop: 20 }} />

      <Paragraph style={{ textAlign: "center" }}>
        Do you want to continue?
      </Paragraph>

      <View style={{ marginTop: 20 }} />

      <Surface
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Button
          icon="close"
          mode="outlined"
          color={Colors[theme].attention}
          onPress={() => console.log("Pressed")}
        >
          Cancel
        </Button>

        <Title>OR</Title>

        <Button
          icon="check"
          mode="outlined"
          color={Colors[theme].success}
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={() => console.log("Pressed")}
        >
          Confirm
        </Button>
      </Surface>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  screenContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 100,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
  },
});
