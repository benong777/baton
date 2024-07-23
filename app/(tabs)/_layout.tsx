import { Tabs, router } from 'expo-router';
import { Pressable, View } from 'react-native';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Avatar } from '@/components/Avatar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        headerRight: () => (
          <View style={{ flexDirection: 'row', marginRight: 8 }}>
            <Pressable hitSlop={10} onPress={ () => router.push({ pathname: '/profile', }) }>
              <Avatar name={'John Doe'} size={28} />
            </Pressable>
          </View>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
