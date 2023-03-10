import { authSingOutUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { PostsScreenNested } from "../Nested/PostsScreenNested";
import { MapScreenNested } from "../Nested/MapScreenNested";
import { CommentsScreenNested } from "../Nested/CommentsScreenNested";

import { Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

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
            <Pressable
              onPress={() => dispatch(authSingOutUser())}
              style={{ position: "absolute", right: 16 }}
            >
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
