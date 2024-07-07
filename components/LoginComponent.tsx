import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const LoginComponent = () => {

    const handleLogin = () => {

    }

   return (
    <View style={styles.container}>
            <View>
              <Text style={{ fontFamily: "PoppinsBlack" }}>Username</Text>
              <View style={styles.textInputStyle}>
                <TextInput />
              </View>
            </View>

            <View>
              <Text style={{ fontFamily: "PoppinsBlack" }}>Password</Text>
              <View style={styles.textInputStyle}>
                <TextInput
                  secureTextEntry={true} // This masks the password
                  placeholder="Enter your password"
                  required={true}
                />
              </View>
            </View>

            <Text>Forgot Password?</Text>
            <TouchableOpacity style={StyleSheet.buttonStyles} onPress={handleLogin}>
              <Link href="dashboard" style={styles.buttonTextStyle}>
                Login
              </Link>
            </TouchableOpacity>
            <Text>Version 0.1</Text>
          </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userIcon: {
      height: 160,
      width: 390,
    },
    textInputStyle: {
      borderWidth: 0.4,
      color: "blue",
      borderRadius: 10,
      height: 50,
    },
    buttonStyles: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0343C9",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 5,
      marginTop: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    buttonTextStyle: {
      fontFamily: "PoppinsBlack",
      color: "#ffffff", // Example text color
      fontSize: 16, // Example font size
    },
  });
  

export default LoginComponent