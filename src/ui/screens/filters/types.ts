import type { StaticScreenProps } from '@react-navigation/native'
import { CategoryType } from 'mappers'

export type FiltersProps = StaticScreenProps<{
  selectedCategory: CategoryType | null
  onSelectFilter: (category: CategoryType) => void
}>
