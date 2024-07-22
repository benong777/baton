import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

import MapView, { Marker } from 'react-native-maps';

const location = () => {
  const { lat, lng }  = useLocalSearchParams();

  const [region, setRegion] = useState({
    latitude: parseFloat(lat),
    longitude: parseFloat(lng),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2 }}>
            <MapView style={styles.map} region={region}>
              <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
            </MapView>
          </View>
          <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Content</Text>
          </View>
        </View>
  )
}

export default location

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})