import React, { useCallback, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [showPass, setShowPass] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const formSubmit = () => {
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View
          style={{ ...styles.container, height: isShowKeyboard ? 370 : 549 }}
          onLayout={onLayoutRootView}
        >
          <View style={styles.avatar}></View>
          <Text style={styles.title}>Registration</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={"Login"}
              value={formData.login}
              onFocus={() => setIsShowKeyboard(true)}
              onBlur={() => setIsShowKeyboard(false)}
              onChangeText={(value) =>
                setFormData((prev) => ({ ...prev, login: value }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder={"Email"}
              value={formData.email}
              onFocus={() => setIsShowKeyboard(true)}
              onBlur={() => setIsShowKeyboard(false)}
              onChangeText={(value) =>
                setFormData((prev) => ({ ...prev, email: value }))
              }
            />
            <View style={styles.passwordWrap}>
              <TextInput
                style={styles.input}
                placeholder={"Password"}
                value={formData.password}
                secureTextEntry={!showPass}
                onFocus={() => setIsShowKeyboard(true)}
                onBlur={() => setIsShowKeyboard(false)}
                onChangeText={(value) =>
                  setFormData((prev) => ({ ...prev, password: value }))
                }
              />
              <Text style={styles.show} onPress={() => setShowPass(!showPass)}>
                {showPass ? "Hide" : "Show"}
              </Text>
            </View>
            <View
              style={{
                ...styles.submitWrap,
                display: isShowKeyboard ? "none" : "flex",
              }}
            >
              <TouchableOpacity
                style={styles.submit}
                activeOpacity={0.8}
                onPress={formSubmit}
              >
                <Text style={styles.submitText}>Registration</Text>
              </TouchableOpacity>
              <Text style={styles.redirect}>Already registered? Login</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  title: {
    marginTop: 92,
    marginBottom: 33,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    textAlign: "center",
    lineHeight: 35,
  },
  form: {
    gap: 16,
    width: "100%",
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  passwordWrap: {
    position: "relative",
  },
  show: {
    position: "absolute",
    color: "#1B4371",
    right: 16,
    top: "30%",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  submit: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    marginTop: 27,
  },
  submitText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
  },
  submitWrap: {
    gap: 16,
  },
  redirect: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
  },
});
