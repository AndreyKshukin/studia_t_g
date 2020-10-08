import React from 'react';
import { Text, View, Image } from 'react-native';
import { IName } from 'src/types';

import styles from './style.module';

export const ProfileName = ({
  profile,
}: {
  profile: { name: IName; email: string };
}): JSX.Element => {
  const name = `${profile.name.title} ${profile.name.first} ${profile.name.last}`;
  const email = profile.email;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <Image
        style={styles.img}
        source={require('@images/more_arrow.png')}
        resizeMode={'center'}
      />
    </View>
  );
};
