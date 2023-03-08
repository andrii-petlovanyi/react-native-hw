import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const ProfilePostCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image source={} style={styles.postImage} /> */}
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur ad ipi sicing adipisicing
        adipisicing adipisicing.
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileComments")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome name="comment" size={24} color="#FF6C00" />
          <Text style={styles.quantity}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 24 }}
        >
          <AntDesign name="like2" size={24} color="#FF6C00" />
          <Text style={styles.quantity}> 0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
          }}
          onPress={() => {
            navigation.navigate("ProfileMap");
          }}
        >
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <Text style={styles.locationTitle}>Lviv</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },
  postImage: {
    width: "100%",
    marginBottom: 8,
    borderRadius: 8,
    height: 240,
    resizeMode: "cover",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    marginBottom: 8,
  },
  quantity: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    marginLeft: 6,
  },
  locationTitle: {
    marginLeft: 4,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
