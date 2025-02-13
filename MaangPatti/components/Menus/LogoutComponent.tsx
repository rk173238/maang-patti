import { View } from 'react-native';
import { useState } from 'react';
import MenuItem from '../MenuItem';
import LogoutMenu from './content/LogoutMenu';

export default function LogoutComponent() {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    setIsSelected(false);
  };

  return (
    <View>
      <MenuItem
        icon="logout"
        title="Logout"
        onPress={handlePress}
      />
      {isSelected && (
        <LogoutMenu 
          onLogout={handleLogout}
          onCancel={handlePress}
        />
      )}
    </View>
  );
} 