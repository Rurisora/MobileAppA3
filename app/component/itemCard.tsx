import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type Item = {
  id: number;
  name: string;
  stats: string;
  description: string;
  image: any;
};

export default function ItemCard({ item }: { item: Item }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.stats}>{item.stats}</Text>
        <Text style={styles.passive}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
    alignItems: "flex-start",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  stats: {
    fontSize: 14,
    marginBottom: 4,
  },
  passive: {
    fontSize: 12,
    fontStyle: "italic",
  },
});