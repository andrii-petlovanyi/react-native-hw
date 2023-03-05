import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfilePostCard } from "../../components/ProfilePostCard";

const image = require("../../assets/img/background.webp");

export const ProfileScreenNested = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.imageBg}>
        <View style={styles.profileContainer}>
          <View style={styles.avatar}>
            {/* <Image source={} style={styles.avatarImg} /> */}

            <Pressable>
              <View style={styles.addAvatarIcon}>
                <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
              </View>
            </Pressable>
          </View>
          <Pressable style={styles.logoutIcon}>
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          </Pressable>
          <Text style={styles.username}>Andrii</Text>
          <View style={styles.postWrap}>
            <ProfilePostCard navigation={navigation} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  profileContainer: {
    paddingHorizontal: 16,
    width: "100%",
    height: "85%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    flexDirection: "row",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    alignItems: "flex-end",
  },
  avatarImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addAvatarIcon: {
    position: "absolute",
    right: -13,
    bottom: 14,
  },
  logoutIcon: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  username: {
    marginTop: 94,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
  },
  postWrap: {
    marginTop: 30,
  },
});
