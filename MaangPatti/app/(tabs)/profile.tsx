import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
  const menuItems = [
    { icon: 'account-balance-wallet', title: 'Wallet' },
    { icon: 'person', title: 'Personal Information' },
    { icon: 'settings', title: 'Settings' },
    { icon: 'help', title: 'Help & Support' },
    { icon: 'logout', title: 'Logout' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://placeholder.com/150' }} // Replace with actual image
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.userName}>John Doe</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {/* Handle navigation */}}
          >
            <MaterialIcons name={item.icon} size={24} color="#333" />
            <Text style={styles.menuText}>{item.title}</Text>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuContainer: {
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
}); 