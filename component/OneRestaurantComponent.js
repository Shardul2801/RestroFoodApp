import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RestaurantData } from "../data/RestaurantData";
import ItemComponent from "./ItemComponent";
import { ItemsData } from "../data/ItemsData";
import { useNavigation } from "@react-navigation/native";

const OneRestaurantComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
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

      <View style={styles.restroContainer}>
        <Image
          style={styles.restroImage}
          source={{
            uri: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Mouj Restaurant
          </Text>
          <Text style={{ fontSize: 12, lineHeight: 12 }}>
            Whitefield , Banglore
          </Text>
          <View style={styles.InfoContainer}>
            <Text style={{ fontSize: 10, fontWeight: "800" }}>25-30 mins</Text>
            <Text style={{ fontSize: 10, fontWeight: "800" }}>
              <Entypo name="location-pin" size={12} color="black" />5 Km
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.filterContainer}>
        <AntDesign name="filter" size={24} color="black" />
        <Text style={{ textAlign: "center" }}>Filter</Text>
      </View>

      <ScrollView>
        {ItemsData.map((item, index) => {
          return <ItemComponent image={item.image} name={item.name} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, marginTop: 30 },
  searchBar: {
    width: "85%",
    backgroundColor: "#C0C0C0",
    borderRadius: 10,
    borderWidth: 0.5,
    alignContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  restroContainer: {
    backgroundColor: "#D3D3D3",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    justifyContent: "center",
  },
  restroImage: {
    height: "50%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: -80,
  },
  InfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    marginTop: 5,
  },
  filterContainer: {
    marginTop: 10,
    backgroundColor: "gray",
    borderRadius: 10,
    height: "5%",
    paddingHorizontal: 10,
    maxWidth: "30%",
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default OneRestaurantComponent;
