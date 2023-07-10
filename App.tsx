
import { StyleSheet, Animated } from "react-native";
import React from "react";
import { Map } from "./components/Map";
import SplashScreen from "./components/SplashScreen"; 

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