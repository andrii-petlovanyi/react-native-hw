import { createStackNavigator } from "@react-navigation/stack";

import { Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { PostsScreenNested } from "../Nested/PostsScreenNested";
import { MapScreenNested } from "../Nested/MapScreenNested";
import { CommentsScreenNested } from "../Nested/CommentsScreenNested";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({ navigation }) => {
  return (
    <NestedScreen.Navigator initialRouteName="Posts">
      <NestedScreen.Screen
        name="DefaultScreen"
        component={PostsScreenNested}
        options={{
          headerTitle: "Posts",
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Medium",
            color: "#212121",
          },
          headerLeft: false,
          headerRight: () => (
            <Pressable style={{ position: "absolute", right: 16 }}>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </Pressable>
          ),
          headerStyle: {
            borderBottomWidth: 0.3,
            borderBottomColor: "#B3B3B3",
          },
          headerTitleAlign: "center",
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreenNested}
        options={{ headerTitleAlign: "center" }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreenNested}
        options={{ headerTitleAlign: "center" }}
      />
    </NestedScreen.Navigator>
  );
};
