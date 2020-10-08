import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './style.module';

export const HeaderStatusBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
    </View>
  );
};
