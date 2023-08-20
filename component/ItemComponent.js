import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { ItemsData } from "../data/ItemsData";
import { useNavigation } from "@react-navigation/native";

const ItemComponent = ({ image, name }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ItemScreen", { name, image });
      }}
    >
      <View style={styles.ImageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <TouchableOpacity style={styles.orderButton}>
          <View style={{}}>
            <Text style={{ textAlign: "center" }}>Order</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.InfoContainer}>
          <Text style={{ fontSize: 16, fontWeight: "800" }}>{name}</Text>
          <Text style={{ fontSize: 10 }}>
            There are many variations of passages of Lorem Ipsum available
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ImageContainer: { padding: 15, flexDirection: "row" },
  image: { width: "25%", height: 60 },
  orderButton: {
    position: "absolute",
    backgroundColor: "orange",
    height: 25,
    width: 60,
    borderRadius: 10,
    bottom: 0,
    left: 25,

    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  InfoContainer: { marginLeft: 10, width: "80%" },
});

export default ItemComponent;
