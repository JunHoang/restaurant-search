import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ResultsList({ title }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
