import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "PoppinsBlack" : require('../assets/fonts/Poppins-Black.ttf'),
    "PoppinsBold" : require('../assets/fonts/Poppins-Bold.ttf'),
    "PoppinsBlackItalic" : require('../assets/fonts/Poppins-BlackItalic.ttf'),
    "PoppinsRegular" : require('../assets/fonts/Poppins-Regular.ttf'),
    "PoppinsMedium" : require('../assets/fonts/Poppins-Medium.ttf'),
    "PoppinsSemiBold": require('../assets/fonts/Poppins-SemiBold.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme} children={undefined}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
