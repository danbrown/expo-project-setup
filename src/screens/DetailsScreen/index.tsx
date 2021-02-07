import React, { Component, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  Button,
  TouchableHighlight,
  Text,
} from "react-native";

export default function DetailsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
