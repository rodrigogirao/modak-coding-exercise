import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';
import {Colors} from '../../../constants/tokens';

export function Loader(): React.JSX.Element {
  return (
    <ActivityIndicator
      color={Colors.primary}
      size={'large'}
      style={styles.loader}
    />
  );
}
