import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HelpSupportMenu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.supportItem}>
        <MaterialIcons name="chat" size={24} color="#333" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Chat Support</Text>
          <Text style={styles.description}>Talk to our customer service team</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.supportItem}>
        <MaterialIcons name="phone" size={24} color="#333" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Call Center</Text>
          <Text style={styles.description}>+91 1800-123-4567</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.supportItem}>
        <MaterialIcons name="email" size={24} color="#333" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Email Support</Text>
          <Text style={styles.description}>support@maangpatti.com</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.supportItem}>
        <MaterialIcons name="help" size={24} color="#333" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>FAQs</Text>
          <Text style={styles.description}>Frequently asked questions</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textContainer: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
}); 