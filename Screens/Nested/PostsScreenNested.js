import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { PostCard } from "../../components/PostCard";

export const PostsScreenNested = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          {/* <Image source={} style={styles.avatar} /> */}
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>Andrii Petlovanyi</Text>
          <Text style={styles.userEmail}>pam@gmail.com</Text>
        </View>
      </View>
      <PostCard navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "gray",
  },
  userInfo: {
    marginLeft: 8,
  },
  username: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
