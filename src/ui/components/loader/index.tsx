import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

export function Loader(): React.JSX.Element {
  return <ActivityIndicator size={'large'} style={styles.loader} />;
}
