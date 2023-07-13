import { Text, Animated, Button } from 'react-native';

import { style } from "./SplashScreen.style";
import { useEffect, useRef, useState } from 'react';

// The states that the splashscreen can have
type State = "NOT_READY" | "LOADED" | "FINISHED" | "HIDDEN" | "SPLASH_HIDDEN"; 

const enum States {
  NOT_READY = "NOT_READY",
  LOADED = "LOADED",
  FINISHED = "FINISHED",
  HIDDEN = "HIDDEN",
  SPLASH_HIDDEN = "SPLASH_HIDDEN"
}

export default function SplashScreen(props: {appIsReady: boolean}) {

  const appIsReady = props.appIsReady;
  const [state, setState] = useState<State>(States.NOT_READY);
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    if(state === States.NOT_READY) { // start loading logo
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start(() => {
        setState(States.LOADED); // logo loaded
      });
    }

    setTimeout(() => {
      if (appIsReady && state === States.LOADED) {
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        }).start(() => {
          setState(States.HIDDEN); // logo hidden
        });
      }
    }, 1000); // 1 second added delay (1 second + delay for app to be ready)

    if (appIsReady && state === States.HIDDEN) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        setState(States.SPLASH_HIDDEN); // whole splash is hidden
      });
    }
    
  }, [appIsReady, state]);

  if(state === States.SPLASH_HIDDEN) {

    function handlePress() {
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
      
      Animated.timing(containerOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();

      setState(States.NOT_READY)
    }

    return (
      <Animated.View style={{
        position: "absolute",
        bottom: 0,
        width: "100%"
      }}>
        <Button onPress={handlePress} title="Simulate Splash Screen" />
      </Animated.View>
    )
  }

  return (
    <Animated.View style={[style.container, {opacity: containerOpacity}]}>
      <Animated.View style={{opacity: logoOpacity}}>
        <Text style={style.logoText}>Go
            <Text style={style.secondPart}>P<Text style={style.whiteOpaque1}>e</Text><Text style={style.whiteOpaque2}>e</Text><Text style={style.whiteOpaque3}>e</Text></Text>
        </Text>
        <Text style={style.subtitle} >The #1 application when nature is calling</Text>
      </Animated.View>
    </Animated.View>
  )
}