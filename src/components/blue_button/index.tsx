import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const BlueButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.openButton} onPress={onClick}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});
