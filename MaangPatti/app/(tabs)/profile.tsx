import { View, Text, StyleSheet } from 'react-native';
import ProfilePicture from '../../components/ProfilePicture';
import WalletComponent from '../../components/Menus/WalletComponent';
import PersonalInformationComponent from '../../components/Menus/PersonalInformationComponent';
import SettingsComponent from '../../components/Menus/SettingsComponent';
import HelpSupportComponent from '../../components/Menus/HelpSupportComponent';
import LogoutComponent from '../../components/Menus/LogoutComponent';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <ProfilePicture imageUri="https://placeholder.com/150" />
        <Text style={styles.userName}>John Doe</Text>
      </View>

      <View style={styles.menuContainer}>
        <WalletComponent />
        <PersonalInformationComponent />
        <SettingsComponent />
        <HelpSupportComponent />
        <LogoutComponent />
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
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuContainer: {
    paddingHorizontal: 15,
  },
}); 