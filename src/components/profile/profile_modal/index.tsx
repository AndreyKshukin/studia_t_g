import React, { useEffect } from 'react';
import { View, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ProfileAction } from '@actions';
import { DataState, IAppStore, IProfileTeaser } from '@types';

import { ProfileMessage } from '../profile_message';
import styles from './style.module';
import { ProfileDetail } from '../profile_detail';

export const ProfileModal = ({
  profileTeaser,
  closeModal,
}: {
  profileTeaser: IProfileTeaser;
  closeModal: () => void;
}): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProfileAction.fetchDetail(profileTeaser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const profileState = useSelector((state: IAppStore) => {
    return state.profileModule;
  });

  const isLoading = profileState.state === DataState.loading;

  if (isLoading) {
    return (
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <ProfileMessage text={'loading'} clickBtn={closeModal} />
        </View>
      </Modal>
    );
  }

  const error = profileState.errorMessage;

  if (error) {
    return (
      <Modal animationType="none" transparent={true}>
        <View style={styles.centeredView}>
          <ProfileMessage text={error} clickBtn={closeModal} />
        </View>
      </Modal>
    );
  }

  const profileDetail = profileState.profileDetail;
  return (
    <Modal animationType="fade" transparent={true}>
      <View style={styles.centeredView}>
        {profileDetail !== null ? (
          <ProfileDetail profile={profileDetail} clickBtn={closeModal} />
        ) : (
          <ProfileMessage text={'Error load profile'} clickBtn={closeModal} />
        )}
      </View>
    </Modal>
  );
};
