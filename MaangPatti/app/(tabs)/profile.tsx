import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import ProfilePicture from '../../components/ProfilePicture';
import MenuItem from '../../components/MenuItem';
import WalletMenu from '../../components/menu/WalletMenu';
import PersonalInfoMenu from '../../components/menu/PersonalInfoMenu';
import SettingsMenu from '../../components/menu/SettingsMenu';
import HelpSupportMenu from '../../components/menu/HelpSupportMenu';
import LogoutMenu from '../../components/menu/LogoutMenu';

export default function Profile() {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const handleMenuPress = (menuTitle: string) => {
    setSelectedMenu(selectedMenu === menuTitle ? null : menuTitle);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    setSelectedMenu(null);
  };

  const renderMenuContent = () => {
    switch (selectedMenu) {
      case 'Wallet':
        return <WalletMenu />;
      case 'Personal Information':
        return <PersonalInfoMenu />;
      case 'Settings':
        return <SettingsMenu />;
      case 'Help & Support':
        return <HelpSupportMenu />;
      case 'Logout':
        return (
          <LogoutMenu 
            onLogout={handleLogout}
            onCancel={() => setSelectedMenu(null)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <ProfilePicture imageUri="https://placeholder.com/150" />
        <Text style={styles.userName}>John Doe</Text>
      </View>

      <View style={styles.menuContainer}>
        <MenuItem
          icon="account-balance-wallet"
          title="Wallet"
          onPress={() => handleMenuPress('Wallet')}
        />
        <MenuItem
          icon="person"
          title="Personal Information"
          onPress={() => handleMenuPress('Personal Information')}
        />
        <MenuItem
          icon="settings"
          title="Settings"
          onPress={() => handleMenuPress('Settings')}
        />
        <MenuItem
          icon="help"
          title="Help & Support"
          onPress={() => handleMenuPress('Help & Support')}
        />
        <MenuItem
          icon="logout"
          title="Logout"
          onPress={() => handleMenuPress('Logout')}
        />
      </View>

      {renderMenuContent()}
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