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

const { height } = Dimensions.get("window");

export default function LoginLayout() {
   return (
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
            <Text style={{ color: "grey",
    fontSize: 24,
    fontFamily : "PoppinsBlack"}}>Sign In</Text>
          </View>

          <View style={styles.loginSection}>
           <LoginComponent />
          </View>
        </ImageBackground>
      </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  textStyle: {
    color: "grey",
    fontSize: 24,
    fontFamily : "PoppinsBlack"
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
    flex: 0.55,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
});
