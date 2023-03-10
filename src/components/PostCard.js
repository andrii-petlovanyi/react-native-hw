import { useState, useEffect } from "react";
import {
  collection,
  getCountFromServer,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const PostCard = ({
  photo,
  title,
  location,
  navigation,
  coords,
  postId,
  likes,
}) => {
  const [count, setCount] = useState(null);
  const [isLike, setIsLike] = useState(false);

  const getCommentsCount = async () => {
    try {
      const coll = collection(db, "posts", postId, "comments");
      const snapshot = await getCountFromServer(coll);
      setCount(snapshot.data().count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommentsCount();
  }, []);

  const onLike = async () => {
    setIsLike(!isLike);

    if (isLike) {
      await updateDoc(doc(db, "posts", postId), {
        like: likes - 1,
      });
      return;
    }
    await updateDoc(doc(db, "posts", postId), {
      like: likes ? likes + 1 : 1,
    });
    return;
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.postImage} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.comments}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Comments", { photo, postId })}
          >
            <Feather name="message-circle" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.commentsQuantity}> {count}</Text>
        </View>
        <TouchableOpacity
          onPress={onLike}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          {isLike ? (
            <AntDesign name="like1" size={24} color="#FF6C00" />
          ) : (
            <AntDesign name="like2" size={24} color="#FF6C00" />
          )}
          <Text style={styles.quantity}> {likes ? likes : 0}</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.location}
            onPress={() =>
              navigation.navigate("Map", { coords, title, location })
            }
          >
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={styles.locationTitle}>
              {location.slice(0, 25) + "..."}
            </Text>
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
