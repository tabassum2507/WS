import LoginComponent from "@/components/LoginComponent";
import UserSvgComponent from "@/components/svgs/UserSvgComponents";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
  TextInput,
} from "react-native-gesture-handler";
import SvgUri from "react-native-svg";

const { height } = Dimensions.get("window");

export default function HomeScreen() {
  const [translateY] = useState(new Animated.Value(height * 0.6));

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let offsetY = event.nativeEvent.translationY;

      Animated.spring(translateY, {
        toValue: offsetY > height * 0.3 ? height * 0.6 : height * 0.4,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/bg2.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.logoSection}>
            <Image
              source={require("../../assets/images/Logo.png")}
              style={styles.logoStyles}
            />
            <Text style={styles.text}>Sign In</Text>
          </View>

          <View style={styles.loginSection}>
           <LoginComponent />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  logoSection: {
    flex: 0.45, // 40% of the screen height
    justifyContent: "center",
    alignItems: "center",
  },
  logoStyles: {
    height: 40,
    width: 220,
  },
  loginSection: {
    // position: 'absolute',
    // top: height * 0.6,
    flex: 0.55,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
});
