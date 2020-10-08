import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { DataState, IProfileListComponent, IProfileTeaser } from '@types';
import { ProfileTeaser } from '../profile_teaser';

export const ProfileList = ({
  params,
}: {
  params: IProfileListComponent;
}): JSX.Element => {
  const { profiles, openProfile, getProfiles, loadState } = params;

  const renderItem = ({ item }: { item: IProfileTeaser }) => (
    <ProfileTeaser params={{ profile: item, openProfile }} />
  );

  const footerSpiner = () => {
    if (loadState !== DataState.loading) return null;
    return <ActivityIndicator size="large" color="#000" />;
  };

  // const geaderSpiner = () => {

  // }

  return (
    <View style={styles.container}>
      <FlatList
        progressViewOffset={10}
        refreshing={true}
        refreshControl={
          <RefreshControl
            refreshing={loadState === DataState.refreshing}
            onRefresh={params.refreshListProfile}
          />
        }
        keyExtractor={item => item.email + item.id.value}
        data={Array.from(profiles.values())}
        renderItem={renderItem}
        onEndReached={getProfiles}
        onEndReachedThreshold={0.4}
        ListFooterComponent={footerSpiner}
        getItemLayout={(data, index) => ({
          length: 70,
          offset: 70 * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
