import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  console.log(result);

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return <View></View>;
  }

  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
