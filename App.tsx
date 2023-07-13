
import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import SplashScreen from "./components/SplashScreen/SplashScreen"; 
import { Map } from "./components/Map/Map";


export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const styles = StyleSheet.create({
    mapView: {
      flex: 1
    }
  });

  useEffect(() => {
    // Simulate a small delay until the app is ready (e.g. loading dependencies)
    setTimeout(() => {
      setAppIsReady(true);
    }, 3000);
  }, []);

  return (
    <React.Fragment>
      <View style={styles.mapView}>
        <Map />
      </View>
      <SplashScreen appIsReady={appIsReady}/>
    </React.Fragment>
  )
}