import React from 'react';
import {Button, Text, View} from 'react-native';
import {GenericErrorProps} from './types';
import styles from './styles';

export function GenericError(props: GenericErrorProps): React.JSX.Element {
  const {onRetry} = props;

  return (
    <View style={styles.error}>
      <Text style={styles.message}>
        An error occurred. Retry in a few seconds!
      </Text>
      <Button title="Retry" onPress={onRetry} />
    </View>
  );
}
