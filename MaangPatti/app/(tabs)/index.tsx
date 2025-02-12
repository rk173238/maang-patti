import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText 
        type="title" 
        onPress={() => router.push('/game')}
        style={styles.playButton}
      >
        ▶ Play
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    fontSize: 32,
    padding: 20,
  },
});
