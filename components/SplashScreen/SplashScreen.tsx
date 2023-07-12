
import { View, Text } from 'react-native';

import { style } from "./SplashScreen.style";

/**
 * !TODO Needs to be animated and added to the front page
 */
export default function SplashScreen() {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.logoText}>Go
            <Text style={style.secondPart}>P<Text style={style.whiteOpaque1}>e</Text><Text style={style.whiteOpaque2}>e</Text><Text style={style.whiteOpaque3}>e</Text></Text>
        </Text>
        <Text style={style.subtitle} >The #1 application when nature is calling</Text>
      </View>
    </View>
  )
}