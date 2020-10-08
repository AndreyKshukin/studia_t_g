import React from 'react';
import { Text, View } from 'react-native';

import { BlueButton } from '../../blue_button';

import styles from './style.module';

export const ProfileMessage = ({
  text,
  textBtn = 'consel',
  clickBtn,
}: {
  text: string;
  textBtn?: string;
  clickBtn: () => void;
}): JSX.Element => {
  return (
    <View style={styles.modalView}>
      <Text style={styles.text}>{text}</Text>
      <BlueButton text={textBtn} onClick={clickBtn} />
    </View>
  );
};
