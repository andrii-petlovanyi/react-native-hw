import { StyleSheet, Text, View } from "react-native";

export const CommentCard = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 24,
        }}
      >
        {/* <Image source={} style={styles.avatar} /> */}
        <View style={styles.comment}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
            ipsum est, magnam facere nemo impedit officia nostrum. Dolorem saepe
            eligendi corrupti veniam possimus eius deserunt quidem ut cumque
            blanditiis.
          </Text>
          <Text
            style={{
              ...styles.date,
              textAlign: "right",
            }}
          >
            01.12.1992
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 50,
  },
  comment: {
    flex: 1,
    marginLeft: 16,

    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  userComment: {
    marginRight: 16,
    flex: 1,

    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#212121",
  },
  date: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#BDBDBD",
  },
});
