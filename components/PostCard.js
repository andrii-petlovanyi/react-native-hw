import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const PostCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image source={} style={styles.postImage} /> */}
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <View style={styles.bottomContainer}>
        <View style={styles.comments}>
          <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
            <Feather name="message-circle" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.commentsQuantity}> 10</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginLeft: 30,
              alignItems: "center",
            }}
          >
            <AntDesign name="like2" size={24} color="#FF6C00" />
            <Text style={styles.quantity}> 0</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.location}
            onPress={() => navigation.navigate("Map")}
          >
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={styles.locationTitle}>Lviv</Text>
          </TouchableOpacity>
        </View>
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
    height: 240,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    marginBottom: 8,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentsQuantity: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationTitle: {
    marginLeft: 4,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
