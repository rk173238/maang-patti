import { View, Image, StyleSheet } from 'react-native';

interface ProfilePictureProps {
  imageUri: string;
}

export default function ProfilePicture({ imageUri }: ProfilePictureProps) {
  return (
    <View style={styles.profileImageContainer}>
      <Image
        source={{ uri: imageUri }}
        style={styles.profileImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
}); 