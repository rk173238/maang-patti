import { View } from 'react-native';
import { useState } from 'react';
import MenuItem from '../MenuItem';
import PersonalInfoMenu from '../menu/PersonalInfoMenu';

export default function PersonalInformationComponent() {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <View>
      <MenuItem
        icon="person"
        title="Personal Information"
        onPress={handlePress}
      />
      {isSelected && <PersonalInfoMenu />}
    </View>
  );
} 