import React from 'react';
import { Text, View, Image } from 'react-native';

import { BlueButton } from '../../blue_button';

import { IProfileDetail } from '@types';

import styles from './style.module';

export const ProfileDetail = ({
  profile,
  clickBtn,
}: {
  profile: IProfileDetail;
  clickBtn: () => void;
}): JSX.Element => {
  const name = `${profile.name.title} ${profile.name.first} ${profile.name.last}`;
  const uri = profile.picture.large;
  return (
    <View style={styles.modalView}>
      <Image source={{ uri }} resizeMode={'cover'} style={styles.img} />
      <View style={styles.text_box}>
        <Text style={styles.title_text}>{name}</Text>
        <Text style={styles.text}>Age: {profile.dob.age}</Text>
        <Text style={styles.text}>Email: {profile.email}</Text>
        <Text style={styles.text}>Phone: {profile.phone} </Text>
      </View>

      <BlueButton text={'Close profile'} onClick={clickBtn} />
    </View>
  );
};
