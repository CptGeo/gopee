import MapView, {PROVIDER_GOOGLE, LatLng, Region, Camera} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {StyleSheet} from 'react-native';

const coords: LatLng = {
  latitude: 49.18443280792867,
  longitude: 16.623088170396255,
};

const region: Region = {
  latitude: 49.18443280792867,
  longitude: 16.623088170396255,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const camera: Camera = {
  center: coords,
  heading: 0,
  zoom: 14,
  pitch: 0
}


const styles = StyleSheet.create({
  map: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
    height: '100%'
  }
});

export function Map() {
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      initialRegion={region}
      camera={camera}
      minZoomLevel={9}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton
      showsCompass>
    </MapView>
  );
}
