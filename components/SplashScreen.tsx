
import { View, Text, StyleSheet } from 'react-native';


/**
 * !TODO Needs to be animated and added to the front page
 */
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logoText}>Go
            <Text style={styles.secondPart}>Pee</Text>
        </Text>
        <Text style={styles.subtitle} >The #1 application when nature is calling</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28C2FF",
    zIndex: 99
  },
  logoText: {
    fontSize: 56,
    textAlign: "center",
    color: "#fff"
  },
  secondPart: {
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 13
  }
});