import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ResultsShowScreen({ navigation }) {
  const id = navigation.getParam("id");

  console.log(id);

  return (
    <View>
      <Text>Results show</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
