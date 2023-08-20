import { View, Text, Image } from "react-native";
import { ItemsData } from "../data/ItemsData";
import React from "react";

const RecommendComponent = ({ image, name, restaurantName }) => {
  return (
    <View style={{ marginTop: 20, marginLeft: 10 }}>
      <Image style={{ height: "52%", width: 120 }} source={{ uri: image }} />
      <Text style={{ fontSize: 16, fontWeight: "800" }}>{restaurantName} </Text>
      <Text style={{ fontSize: 14, fontWeight: "700" }}>{name}</Text>
    </View>
  );
};

export default RecommendComponent;
