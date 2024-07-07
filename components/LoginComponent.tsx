import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef } from "react";
import { Link, router } from 'expo-router'
import { userLogin } from '@/services/allservices';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserIcon from '../assets/images/icon-user.svg'
import CloseEye from '../assets/images/icon-closed-eye.svg'
import PassWord from '../assets/images/icon-password.svg'

const LoginComponent = () => {
  const navigation = useNavigation();
    const [emailID, setEmailID] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setloading] = useState(false)

    const handleLogin = async() => {
      setloading(true)
      const userLoginData = {
        email : emailID,
        password : password
      }

      try {       
        if( emailID !== "" && password !== "") {
        const response = await userLogin(userLoginData)
        if (response.statusCode === 200) {
          setloading(false)
          Alert.alert("Success", "User signed in successfully");
          router.replace('/(tabs)')
        } 
      }else {
        setloading(false)
        
        Alert.alert("Please fill your Email and Password correctly.");
    }
     } catch (error) {
      setloading(false)
        console.log(error)
      }

    }

   return (
    <View style={styles.container}>
            <View style={{marginTop : 40}}>
              <Text style={{ fontFamily: "PoppinsSemiBold" }}>Username</Text>
              <View style={styles.textInputStyle}>
                <UserIcon style={{height: 25, width : 25, marginLeft : 5, marginRight : 10}} />
                <TextInput placeholder='Enter Email Id'
                 onChangeText={(text) => setEmailID(text)}
                 required={true} />
              </View>
            </View>

            <View style={{marginTop : 10}}>
              <Text style={{ fontFamily: "PoppinsSemiBold" }}>Password</Text>
              <View style={styles.textInputStyle}>
              <PassWord style={{height: 25, width : 25, marginLeft : 5, marginRight : 10}} />
                <TextInput
                  secureTextEntry={true} // This masks the password
                  placeholder="Enter your password"
                  required={true}
                  onChangeText={(text) => setPassword(text)}
                />
                <CloseEye style={{height: 35, width : 35, marginLeft : 125}} />
              </View>
            </View>

            <Text style={{textAlign: "right", fontFamily : "PoppinsSemiBold", marginTop : 5}}>Forgot Password?</Text>
            { loading === true ? <ActivityIndicator size="large" color={"blue"} /> :  <TouchableOpacity style={styles.buttonStyles} onPress={handleLogin}>              
              <Text style={styles.buttonTextStyle}>
                Login
              </Text>
            </TouchableOpacity>
            }
            
           
                
              
           
            <Text style={{textAlign : "center", marginTop : 40, fontFamily : "PoppinsRegular"}}>Version 0.1</Text>
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
      flexDirection : "row",
      alignItems : "center",
    },
    buttonStyles: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0343C9",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
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
      fontFamily: "PoppinsRegular",
      color: "#ffffff", // Example text color
      fontSize: 16, // Example font size
    },
  });
  

export default LoginComponent