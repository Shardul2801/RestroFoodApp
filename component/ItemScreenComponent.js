import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import RecommendComponent from "./RecommendComponent";
import { ItemsData } from "../data/ItemsData";
import { RecommendData } from "../data/RecommendData";
import { ReviewsData } from "../data/ReviewsData";
import { useRoute } from "@react-navigation/native";

const ItemScreenComponent = (props) => {
  //   const {
  //     params: { name, image },
  //   } = useRoute();
  console.warn(props.route);
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
      <View style={{ backgroundColor: "#E5E4E2" }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <View
            style={{ flexDirection: "column", marginLeft: 10, width: "90%" }}
          >
            <Text style={{ fontSize: 10, color: "red", fontWeight: "900" }}>
              Bestseller
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Masala Dosa</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>149/-</Text>
            <Text style={{ fontSize: 10, fontWeight: "300", color: "green" }}>
              Made with exotic dosa batter and fresh choosen potato sabji and
              sambar
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "700" }}>Top Reviews</Text>

          <View style={{ flexDirection: "row" }}>
            {ReviewsData.map((item, index) => {
              return (
                <View style={styles.reviewBox}>
                  <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                    {item.user}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "600",
                      lineHeight: 10,
                      color: "green",
                    }}
                  >
                    {item.review}
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <AntDesign name="star" size={14} color="black" />
                    {item.rating}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <TouchableOpacity style={styles.adddToContainer}>
          <Text>Add To Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>More Like This </Text>
      </View>

      <ScrollView horizontal={true} style={{}}>
        {RecommendData.map((item, index) => {
          return (
            <RecommendComponent
              restaurantName={item.restaurantName}
              name={item.name}
              image={item.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    marginTop: 30,
  },
  imageContainer: {
    flexDirection: "row",
    //   height: "50%",
    width: "90%",
    marginTop: 20,
  },
  image: {
    height: 100,
    width: "40%",
    marginLeft: 10,
    borderRadius: 10,
  },
  reviewBox: {
    backgroundColor: "#C0C0C0",
    height: 50,
    width: 90,
    borderRadius: 5,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  adddToContainer: {
    backgroundColor: "orange",
    height: 50,
    width: 120,
    borderRadius: 10,
    marginTop: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default ItemScreenComponent;
