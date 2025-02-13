import { View, Text, StyleSheet } from 'react-native';

export default function PersonalInfoMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.infoItem}>Email: john.doe@example.com</Text>
      <Text style={styles.infoItem}>Phone: +91 98765 43210</Text>
      <Text style={styles.infoItem}>Location: Mumbai, India</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 10,
  },
}); 