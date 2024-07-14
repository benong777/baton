import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar, View, Text } from 'react-native';
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
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                {/* <PressableOpacity hitSlop={10} onPress={() => router.push('/userprofile')}> */}
                  <Avatar name={'John Doe'} size={28} />
                {/* </PressableOpacity> */}
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
            // headerStyle: {
            //   backgroundColor: 'blue',
            // },
          }} />
        <Stack.Screen name="login"
          options={{
            headerTitle: 'Login',
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            // headerBackVisible: false,      // Back arrow
            // headerStyle: {
            //   backgroundColor: 'blue',
            // },
          }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
