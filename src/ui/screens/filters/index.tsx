import React, {useEffect} from 'react';
import {Button, FlatList, Text, TouchableOpacity} from 'react-native';
import {Loader} from '../../components/loader';
import {useNavigation} from '@react-navigation/native';
import {useFilters} from '../../../hooks/filters';
import {CategoryType} from '../../../mappers/category/types';
import styles from './styles';
import {FiltersProps} from './types';

export function FiltersScreen({route}: FiltersProps): React.JSX.Element {
  const {selectedCategory, onSelectFilter} = route.params;
  const {isPending, error, data} = useFilters();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Button title="Close" onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  function onPressFilter(category: CategoryType) {
    onSelectFilter(category);
    navigation.goBack();
  }

  function renderCategory(category: CategoryType) {
    const isSelected = selectedCategory?.slug === category.slug;

    const selectedStyle = isSelected ? styles.selectedCategory : null;

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.category, selectedStyle]}
        onPress={() => onPressFilter(category)}>
        <Text>{category.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      {isPending && <Loader />}
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={({item}) => renderCategory(item)}
      />
    </>
  );
}
