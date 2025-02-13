import { View } from 'react-native';
import { useState } from 'react';
import MenuItem from '../MenuItem';
import HelpSupportMenu from '../menu/HelpSupportMenu';

export default function HelpSupportComponent() {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <View>
      <MenuItem
        icon="help"
        title="Help & Support"
        onPress={handlePress}
      />
      {isSelected && <HelpSupportMenu />}
    </View>
  );
} 