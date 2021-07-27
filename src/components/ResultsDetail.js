import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ResultsDetail({ result }) {
  const { image_url, name, rating, review_count } = result;
  const defaultImgUrl =
    "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png";

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: image_url || defaultImgUrl }}
      />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
