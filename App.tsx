
import { StyleSheet, View } from "react-native";
import React from "react";

import SplashScreen from "./components/SplashScreen/SplashScreen"; 
import { Map } from "./components/Map/Map";

export default function App() {
  const styles = StyleSheet.create({
    mapView: {
      flex: 1
    }
  });

  return (
    <React.Fragment>
      {/* Uncomment to see splash screen */}
      <SplashScreen />
      <View style={styles.mapView}>
        <Map />
      </View>
    </React.Fragment>
  )
}