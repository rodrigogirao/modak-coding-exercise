import React, { useEffect } from 'react'
import { Button, FlatList, Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Colors, OpacityLevel } from 'constants/tokens'
import { useFilters } from 'hooks'
import { CategoryType } from 'mappers'
import { GenericError, Loader } from 'ui/components'
import styles from './styles'
import { FiltersProps } from './types'

export function FiltersScreen({ route }: FiltersProps): React.JSX.Element {
  const { selectedCategory, onSelectFilter } = route.params
  const { isPending, error, data, refetch } = useFilters()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Button
          color={Colors.primary}
          title="Close"
          onPress={() => navigation.goBack()}
        />
      ),
    })
  }, [navigation])

  function onPressFilter(category: CategoryType) {
    onSelectFilter(category)
    navigation.goBack()
  }

  function renderCategory(category: CategoryType | null) {
    if (!category) {
      return null
    }

    const isSelected = selectedCategory?.slug === category.slug

    const selectedStyle = isSelected ? styles.selectedCategory : null

    return (
      <TouchableOpacity
        activeOpacity={OpacityLevel.overlay}
        style={[styles.category, selectedStyle]}
        onPress={() => onPressFilter(category)}>
        <Text>{category.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <>
      {isPending && <Loader />}
      {error ? (
        <GenericError onRetry={refetch} />
      ) : (
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListContainer}
          data={data}
          renderItem={({ item }) => renderCategory(item)}
        />
      )}
    </>
  )
}
