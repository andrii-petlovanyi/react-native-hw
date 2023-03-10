import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const authSignUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (data, thunkApi) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(auth.currentUser, {
        displayName: data.login,
        photoURL: data.avatar,
      });
      const { uid, displayName, email, photoURL } = auth.currentUser;
      return { uid, displayName, email, photoURL };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authSignInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }, thunkApi) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authSingOutUser = createAsyncThunk(
  "auth/singOutUser",
  async (_, thunkApi) => {
    try {
      await signOut(auth);
      ``;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
