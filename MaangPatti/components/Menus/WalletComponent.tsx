import { View } from 'react-native';
import { useState } from 'react';
import MenuItem from '../MenuItem';
import WalletMenu from './content/WalletMenu';

export default function WalletComponent() {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <View>
      <MenuItem
        icon="account-balance-wallet"
        title="Wallet"
        onPress={handlePress}
      />
      {isSelected && <WalletMenu />}
    </View>
  );
} 