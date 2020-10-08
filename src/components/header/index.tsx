import React from 'react';
import { View } from 'react-native';
import { IHeaderPanel } from 'src/types/components/IHeaderPanel';

import { HeaderPanel } from './header_panel';
import { HeaderStatusBar } from './header_status_bar';

import styles from './style.module';

export const Header = ({ params }: { params: IHeaderPanel }): JSX.Element => {
  return (
    <View style={styles.container}>
      <HeaderStatusBar />
      <HeaderPanel params={params} />
    </View>
  );
};
