import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

export const ImageBtn = ({
  src,
  onClick,
}: {
  src: ImageSourcePropType;
  onClick: () => void;
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Image style={styles.image} source={src} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    height: '100%',
  },
});
