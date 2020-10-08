import React from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';

import { IHeaderPanel, IProfileTeasers, IProfileTeaser } from '@types';
import { ImageBtn } from '../../image_btn';

import styles from './style.module';

export const HeaderPanel = ({
  params,
}: {
  params: IHeaderPanel;
}): JSX.Element => {
  const { profiles, refreshListProfile, isLoading } = params;

  const openAlert = () => {
    const profile = getRandomProfile(profiles);
    if (profile) {
      const openProfile = () => params.openProfile(profile);
      createAlert({ profile, openProfile });
    }
  };

  const refreshButton = () => {
    if (isLoading) {
      return <ActivityIndicator color="#000" />;
    }
    return (
      <ImageBtn
        src={require('@images/refresh.png')}
        onClick={refreshListProfile}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ImageBtn src={require('@images/heart.webp')} onClick={openAlert} />
      <Text>Users list</Text>
      {refreshButton()}
    </View>
  );
};

const createAlert = (params: {
  profile: IProfileTeaser;
  openProfile: () => void;
}) => {
  const { profile, openProfile } = params;
  Alert.alert(
    `Profile`,
    `name: ${profile.name.title} ${profile.name.first} ${profile.name.last} 
    \nemail: ${profile.email}`,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Open profile', onPress: openProfile },
    ],
    { cancelable: false },
  );
};

const getRandomProfile = (profiles: IProfileTeasers): IProfileTeaser | null => {
  if (profiles.size === 0) {
    return null;
  }
  let index = Math.floor(Math.random() * profiles.size);
  let rand_profile = null;
  profiles.forEach(profile => {
    if (index === 0) {
      rand_profile = profile;
    }
    index--;
  });

  return rand_profile;
};
