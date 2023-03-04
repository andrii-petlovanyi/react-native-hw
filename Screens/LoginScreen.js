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
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const [showPass, setShowPass] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

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
          style={{ ...styles.container, height: isShowKeyboard ? 250 : 489 }}
          onLayout={onLayoutRootView}
        >
          <Text style={styles.title}>Login</Text>
          <View style={styles.form}>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isFocused.email ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder={"Email"}
              value={formData.email}
              onFocus={() => {
                setIsShowKeyboard(true);
                setIsFocused((prev) => ({
                  ...prev,
                  email: true,
                }));
              }}
              onBlur={() => {
                setIsShowKeyboard(false);
                setIsFocused((prev) => ({
                  ...prev,
                  email: false,
                }));
              }}
              onChangeText={(value) =>
                setFormData((prev) => ({ ...prev, email: value }))
              }
            />
            <View style={styles.passwordWrap}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isFocused.password ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder={"Password"}
                value={formData.password}
                secureTextEntry={!showPass}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setIsFocused((prev) => ({
                    ...prev,
                    password: true,
                  }));
                }}
                onBlur={() => {
                  setIsShowKeyboard(false);
                  setIsFocused((prev) => ({
                    ...prev,
                    password: false,
                  }));
                }}
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
                <Text style={styles.submitText}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.redirect}>No account? Register</Text>
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
  title: {
    marginTop: 32,
    marginBottom: 33,
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    lineHeight: 35,
  },
  form: {
    gap: 16,
    width: "100%",
  },
  input: {
    height: 50,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  passwordWrap: {
    position: "relative",
  },
  show: {
    position: "absolute",
    right: 16,
    top: "25%",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  submit: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    marginTop: 27,
    marginBottom: 16,
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
