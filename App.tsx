
import { StyleSheet, Animated } from "react-native";
import React from "react";

import SplashScreen from "./components/SplashScreen"; 
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
      {/* <SplashScreen /> */}
      <Animated.View style={styles.mapView}>
        <Map />
      </Animated.View>
    </React.Fragment>
  )
}