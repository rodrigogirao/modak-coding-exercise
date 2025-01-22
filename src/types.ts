import type {StaticParamList} from '@react-navigation/native';
import {RootStack} from './App';

export type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
