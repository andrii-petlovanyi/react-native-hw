import { createStackNavigator } from "@react-navigation/stack";
import { CommentsScreenNested } from "../Nested/CommentsScreenNested";
import { MapScreenNested } from "../Nested/MapScreenNested";
import { ProfileScreenNested } from "../Nested/ProfileScreenNested";

const NestedScreen = createStackNavigator();

export const ProfileScreen = () => {
  return (
    <NestedScreen.Navigator initialRouteName="DefaultProfile">
      <NestedScreen.Screen
        name="DefaultProfile"
        component={ProfileScreenNested}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen
        name="ProfileMap"
        component={MapScreenNested}
        options={{
          headerTitle: "Map",
          headerTitleAlign: "center",
          headerLeftLabelVisible: false,
        }}
      />
      <NestedScreen.Screen
        name="ProfileComments"
        component={CommentsScreenNested}
        options={{
          headerTitle: "Comments",
          headerTitleAlign: "center",
          headerLeftLabelVisible: false,
        }}
      />
    </NestedScreen.Navigator>
  );
};
