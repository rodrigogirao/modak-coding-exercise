import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Colors } from 'constants/tokens'
import styles from './styles'

export function Loader(): React.JSX.Element {
  return (
    <ActivityIndicator
      color={Colors.primary}
      size={'large'}
      style={styles.loader}
    />
  )
}
