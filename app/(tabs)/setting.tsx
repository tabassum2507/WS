import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState} from 'react'
import UserIcon from '../../assets/images/icon-user.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Camera from '../../assets/images/Camera.svg'
import Email from '../../assets/images/mail.svg'

const setting = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData !== null) {
        const userData = JSON.parse(storedUserData);
        setUserData(userData);
        // console.log("Retrieved User Data:", userData);
      } else {
        console.log('No user data found.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      getUserData()
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={{flex : 0.2}}>
      {userData && userData?.profile_image ? (
        
              <Image 
                source={{ uri: userData?.profile_image }} 
                style={styles.imageUser} 
              />
             
            ) : (
              <UserIcon width={40} height={50} />
            )}
          <View style={styles.camera}>
            <Camera width={60} height={50} /> 
          </View>
      </View>
      <View style={{flex: 0.2}}>
        <Text style={styles.userNameStyle}>{userData?.username}</Text>
        <Text style={styles.userStyle}>{userData?.designation}</Text>
      </View>

      <View style={{flex: 0.6}}>
        <View>
          <Text style={{fontFamily : "PoppinsRegular", marginTop : 10}}>UserName</Text>
          <View style={styles.inputSection}>
            <UserIcon width={40} height={25} />
            <TextInput value={userData?.username}/>
          </View>
        </View>

        <View>
          <Text style={{fontFamily : "PoppinsRegular", marginTop : 10}}>Email</Text>
          <View style={styles.inputSection}>
            <Email width={55} height={55} />
            <TextInput value={userData?.email}/>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          
          <View style={[styles.inputSection, {backgroundColor : "#fff", borderBottomWidth: 2, borderBottomColor : 'blue'}]}>
            <UserIcon width={40} height={25} />
            <TextInput value='Reset Email'/>
          </View>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#fff",
    alignItems : "center"
  },
  imageUser : {
    height : 120,
    width: 120,
    borderRadius : 100,
  },
  userNameStyle : {
    fontSize : 22, 
    textAlign : "center",
    fontFamily : "PoppinsSemiBold"
  },
  userStyle : {
    fontSize : 18, 
    textAlign : "center",
    fontFamily : "PoppinsMedium"
    
  },
  inputSection : {
    flexDirection : "row",
    width : 320,
    height : 50,
    backgroundColor : "#EEF3F7",
    borderRadius : 5,
    alignItems : "center"
  },
  camera : {
    backgroundColor : "blue",
    borderRadius : 100,
    height : 50,
    width : 50,
    alignItems : "center",
    justifyContent : "center",
    top : -45,
    right : -70,

  }
})

export default setting