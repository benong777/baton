import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../../../components/context/authContext';
import { useLocalSearchParams } from 'expo-router'

const Profile = () => {
  const { logout, user } = useAuth();
  const {id} = useLocalSearchParams();

  console.log('USER: ', user.userId);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View>
      {/* <Text>Username: {user.username}</Text> */}
      <Text>Username: {id}</Text>
      <Pressable onPress={handleLogout}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})