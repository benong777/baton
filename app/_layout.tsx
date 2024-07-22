import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Pressable, StatusBar, View } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Avatar } from '@/components/Avatar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle='light-content' />
      <Stack
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'blue',
          },
          contentStyle: { padding: 0 },
          headerRight: () => (
              <View style={{ borderWidth: 1, borderColor: 'red', marginRight: -8 }}>
                <Pressable hitSlop={10} onPress={() => router.push('/profile')}>
                  <Avatar name={'John Doe'} size={28} />
                </Pressable >
              </View>
          )
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="profile/[id]" */}
        <Stack.Screen name="profile"
          options={{
            headerTitle: 'Profile',
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            // headerBackVisible: false,      // Back arrow
          }} />
        <Stack.Screen name="login"
          options={{
            headerTitle: 'Login',
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            // headerBackVisible: false,
          }} />
        <Stack.Screen name="location"
          options={{
            headerTitle: 'Location',
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            // headerBackVisible: false,
          }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
