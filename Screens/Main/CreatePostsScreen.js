import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const CreatePostsScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ display: isKeyboardShown ? "none" : "flex" }}>
          <View style={styles.iconWrap}>
            <View style={styles.iconBg}>
              <TouchableOpacity>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{ width: 100 }}>
          <Text style={styles.loadBtnText}>Load a photo</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView>
          <View style={{ ...styles.inputContainer, marginBottom: 16 }}>
            <TextInput
              style={styles.inputTitle}
              placeholder="Title..."
              placeholderTextColor="#BDBDBD"
            />
          </View>
          <View style={styles.inputContainer}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <TextInput
              style={{ ...styles.inputTitle, marginLeft: 4 }}
              placeholder="Location..."
              placeholderTextColor="#BDBDBD"
            />
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={{
            ...styles.submitBtn,
            backgroundColor: "#F6F6F6",
          }}
        >
          <Text
            style={{
              ...styles.submitTitle,
              color: "#BDBDBD",
            }}
          >
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 8,
  },
  iconWrap: {
    position: "relative",
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  iconBg: {
    position: "absolute",
    top: "35%",
    right: "40%",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  loadBtnText: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  inputTitle: {
    width: "100%",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  submitBtn: {
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  submitTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
});
