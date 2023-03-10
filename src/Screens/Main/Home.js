import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../../../router";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { onStateChange } from "../../redux/auth/authSlice";
import { auth } from "../../firebase/config";

export const Home = () => {
  const { stateChange } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const updateInfo = {
          userId: user.uid,
          nickname: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        };
        dispatch(onStateChange(updateInfo));
      }
    });
  }, []);
  const routing = useRoute(stateChange);
  return <NavigationContainer>{routing}</NavigationContainer>;
};
