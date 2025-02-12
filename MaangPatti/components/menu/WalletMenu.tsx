import { View, Text, StyleSheet } from 'react-native';

export default function WalletMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Current Balance: ₹5,000</Text>
      <Text style={styles.transaction}>Last Transaction: ₹200 on 20th March</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  balance: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transaction: {
    color: '#666',
  },
}); 