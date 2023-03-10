import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvEBtp7GRNfzaMGh2M6Vwu2tGDpOrUdyk",
  authDomain: "react-native-bb214.firebaseapp.com",
  projectId: "react-native-bb214",
  storageBucket: "react-native-bb214.appspot.com",
  messagingSenderId: "536411634851",
  appId: "1:536411634851:web:347f1f711df578a7655316",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
