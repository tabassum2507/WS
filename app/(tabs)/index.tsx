import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DashboardHeader from '@/components/DashboardHeader'
import DashboardTravelSection from '@/components/DashboardTravelSection'
import DashboardPendingList from '@/components/DashboardPendingList'
import { userDetails } from '@/services/allservices'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboadLayout = () => {

 useEffect(() => {
  const fetchUserData = async () => {
    const userId = 79;
    try {
      const res = await userDetails(userId);
      if (res.statusCode === 200) {
        const userData = res?.data?.data.find(user => user.user_id === userId);
        if (userData) {         
          await AsyncStorage.setItem('userData', JSON.stringify(userData));
         
        } else {
          console.log(`User with user_id ${userId} not found.`);
        }
      } else {
        console.log(`Error: Status code ${res.statusCode}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

    fetchUserData()
 }, [])
 
  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader />
      <DashboardTravelSection />
      <DashboardPendingList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "#fff",
    alignItems : "center",
  }
})


export default DashboadLayout