import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

import MapView, { Marker } from 'react-native-maps';

const location = () => {
  const { lat, lng }  = useLocalSearchParams<{lat: string, lng: string}>();

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
        <View style={{ flex: 1 }}>
          <MapView style={styles.map} region={region}>
            <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
          </MapView>
        </View>
  )
}

export default location

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})