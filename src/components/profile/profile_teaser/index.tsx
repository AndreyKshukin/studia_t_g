import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { IProfileTeaserComponent } from 'src/types';

import { ProfileName } from '../profile_name';
import styles from './style.module';

export const ProfileTeaser = ({
  params,
}: {
  params: IProfileTeaserComponent;
}): JSX.Element => {
  const { profile, openProfile } = params;

  const onClick = () => {
    openProfile(params.profile);
  };

  const uri = profile.picture.large;

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <Image source={{ uri }} resizeMode={'cover'} style={styles.img} />
        <ProfileName profile={profile} />
      </View>
    </TouchableOpacity>
  );
};
