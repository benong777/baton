import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Login() {
  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Login Screen!</ThemedText>
        <HelloWave />
      </ThemedView>
      <Link href="/">
        <ThemedText type="link">Go to HOME screen!</ThemedText>
      </Link>
      <Link href="/profile">
        <ThemedText type="link">Go to PROFILE screen!</ThemedText>
      </Link>
      <Link href={{
          pathname: '/profile',
          params: { },
        }}> Go to Profile
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
