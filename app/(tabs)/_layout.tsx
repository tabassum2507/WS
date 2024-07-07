import { Redirect, Stack, Tabs } from 'expo-router';
import React, {useEffect} from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomDrawer from '@/components/CustomDrawer';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    const checkUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (!storedUserData) {
         return <Redirect href="/login" />
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkUserData();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{drawerHideStatusBarOnOpen : true }}>
      <Drawer.Screen
          name="setting" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
        />
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Check-In',
            title: 'Check-In',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
