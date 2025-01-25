import React from 'react'
import { Button, Text, View } from 'react-native'

import { Colors } from 'constants/tokens'
import styles from './styles'
import { GenericErrorProps } from './types'

export function GenericError(props: GenericErrorProps): React.JSX.Element {
  const { onRetry } = props

  return (
    <View style={styles.error}>
      <Text style={styles.message}>
        An error occurred. Retry in a few seconds!
      </Text>
      <Button color={Colors.primary} title="Retry" onPress={onRetry} />
    </View>
  )
}
