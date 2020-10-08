import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';

import { AppAction } from '@actions';
import {
  DataState,
  IAppStore,
  IHeaderPanel,
  IProfileListComponent,
  IProfileTeaser,
} from '@types';

import { Header } from './header';
import { ProfileList } from './profile/profile_list';
import { ProfileModal } from './profile/profile_modal';

export const App: React.FC = () => {
  const appState = useSelector((state: IAppStore) => {
    return state.appModule;
  });

  const { profiles } = appState;
  const isLoading =
    appState.state === DataState.loading ||
    appState.state === DataState.refreshing;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppAction.refreshProfileList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openProfile = (profile: IProfileTeaser) => {
    dispatch(AppAction.setSelectProfile(profile));
  };

  const refreshListProfile = () => {
    if (appState.state === DataState.refreshing) return;
    dispatch(AppAction.refreshProfileList());
  };

  const getProfiles = () => {
    if (isLoading) return;
    dispatch(AppAction.getProfiles(appState.page));
  };

  const closeModalProfile = () => {
    dispatch(AppAction.unsetSelectProfile());
  };

  if (appState.errorMessage) {
    Toast.show(appState.errorMessage, Toast.LONG);
  }

  const profileList: IProfileListComponent = {
    profiles,
    openProfile,
    refreshListProfile,
    getProfiles,
    loadState: appState.state,
  };

  const headerParams: IHeaderPanel = {
    profiles: profiles,
    isLoading,
    openProfile,
    refreshListProfile,
  };

  return (
    <View style={styles.container}>
      <Header params={headerParams} />
      <ProfileList params={profileList} />
      {appState.selectProfile && (
        <ProfileModal
          profileTeaser={appState.selectProfile}
          closeModal={closeModalProfile}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
});
