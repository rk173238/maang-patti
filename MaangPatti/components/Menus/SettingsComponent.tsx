import { View } from 'react-native';
import { useState } from 'react';
import MenuItem from '../MenuItem';
import SettingsMenu from '../menu/SettingsMenu';

export default function SettingsComponent() {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <View>
      <MenuItem
        icon="settings"
        title="Settings"
        onPress={handlePress}
      />
      {isSelected && <SettingsMenu />}
    </View>
  );
} 