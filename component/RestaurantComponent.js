import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { RestaurantData } from "../data/RestaurantData";
import ItemComponent from "./ItemComponent";

const RestaurantComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Ionicons
            style={{ paddingRight: 5 }}
            name="chevron-back"
            size={24}
            color="black"
          />
        </View>

        <View style={styles.searchBar}>
          <TextInput placeholder="Search Menu" />
        </View>
        <View>
          <Entypo
            style={{ paddingLeft: 5 }}
            name="dots-three-horizontal"
            size={24}
            color="black"
          />
        </View>
      </View>

      {/*  main restaurant */}
      <View style={styles.restroContainer}>
        {RestaurantData.map((item, index) => (
          <View style={{ marginTop: 20 }}>
            <Image
              style={{
                height: "50%",
                width: "95%",
                alignSelf: "center",
                borderRadius: 5,
                resizeMode: "cover",
              }}
              source={{ uri: item.image }}
            />
            <View style={{ position: "absolute", right: 10 }}>
              <Text style={{ fontWeight: "700" }}>{item.rating}</Text>
            </View>

            <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "600" }}>
              {item.name}
            </Text>
            <Text style={{ marginLeft: 10, fontSize: 12 }}>{item.address}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 10 }}>{item.time}</Text>
              <Text style={{ fontSize: 10 }}>{item.distance}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Menu Items */}
      <ScrollView>
        <ItemComponent />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  restroContainer: {
    // backgroundColor: "gray",
  },
  searchBar: {
    width: "85%",
    backgroundColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    alignContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});

export default RestaurantComponent;
