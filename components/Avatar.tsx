import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export type AvatarProps = {
  name: string
  size?: number
  imageUrl?: string
  style?: any
}

function getInitials(name: string) {
  const parts = name?.split(' ')
  if (parts?.length === 1 && name?.length > 1) {
    return `${name[0]}${name[1]}`.toUpperCase()
  }

  const initials = parts?.map((part) => part?.[0])?.join('')
  return initials?.toUpperCase() || ''
}

export function Avatar({ name, size = 50, imageUrl, style }: AvatarProps) {
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }, style]}>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={{ width: size, height: size, borderRadius: size / 2 }}
        />
      ) : (
        <Text style={[styles.text]} allowFontScaling={false}>
          {getInitials(name)}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '500',
  },
})
