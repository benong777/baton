import { Image, StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';
import { Link, router } from 'expo-router';
import { useState } from 'react';

// import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import MapView, { Marker } from 'react-native-maps';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <View style={{ flex: 1 }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          query={{
            key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          // onPress={(data, details = null) => console.log(data, details)}
          onPress={(data, details = null) => {
            if (details && details.geometry && details.geometry.location) {
              const { lat, lng } = details.geometry.location;
              router.push({
                pathname: '/location',
                params: { lat, lng },
              })
              // setRegion({
              //   latitude: lat,
              //   longitude: lng,
              //   latitudeDelta: 0.0922,
              //   longitudeDelta: 0.0421,
              // });
            } else {
              // Handle the case where details or location is null
              console.warn('Location details are missing (null)');
            }
          }}
          fetchDetails={true}
          onFail={error => console.log(error)}
          onNotFound={() => console.log('no results')}
          // listEmptyComponent={() => (
          //   <View style={{flex: 1}}>
          //     <Text>No results were found</Text>
          //   </View>
          // )}
        />

      </View>

    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <Link href="/login">
    //     <ThemedText type="link">Go to login screen!</ThemedText>
    //   </Link>

    //   <GooglePlacesAutocomplete
    //     placeholder="Type a place"
    //     query={{key: GOOGLE_MAPS_API_KEY}}
    //     onPress={(data, details = null) => console.log(data, details)}
    //     fetchDetails={true}
    //     onFail={error => console.log(error)}
    //     onNotFound={() => console.log('no results')}
    //     // listEmptyComponent={() => (
    //     //   <View style={{flex: 1}}>
    //     //     <Text>No results were found</Text>
    //     //   </View>
    //     // )}
    //   />

    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  // titleContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },

  container: {
    flex: 1,
  },
  textInputContainer: {
    width: '100%',
    position: 'absolute',
    top: 50,
    zIndex: 1,
  },
  textInput: {
    height: 44,
    color: '#5d5d5d',
    fontSize: 16,
  },
  listView: {
    backgroundColor: 'white',
  },
});
