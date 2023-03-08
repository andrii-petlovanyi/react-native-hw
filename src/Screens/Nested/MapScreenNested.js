import React from "react";
import { StyleSheet, View } from "react-native";

import MapView, { Marker } from "react-native-maps";

export const MapScreenNested = () => {
  // const title = route.params.title;
  // const location = route.params.location;
  // const { latitude, longitude } = route.params.coords;
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 49.841746474866,
          longitude: 23.996098063087,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            latitude: 49.841746474866,
            longitude: 23.996098063087,
          }}
          title={"Lviv"}
          description={"Lviv"}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
