import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import TabParamList from 'types/navigation-types/bottom-tab';
import Regular from 'typography/regular-text';
import {PlusButton, PrimaryButton} from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import {Loader} from '../../components/atoms/loader';
import HomeCard from '../../components/molecules/cards/home-card';
import {useAppSelector, useAppDispatch} from '../../hooks/use-store';
import {useTasks} from '../../hooks/use-tasks';
import {onLogoutPress} from '../../services/firebase/firebase-actions';
import {Task} from '../../types/entities-types';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'UserTab'>,
  NativeStackScreenProps<RootStackParamList>
>;
type RenderProps = {
  item: Task;
  index: number;
};
const UserTab = (props: props) => {
  const userInfo = useAppSelector(s => s?.user?.userInfo);
  const dispatch = useAppDispatch();
  const {tasks, loading} = useTasks();

  if (loading) {
    return <Loader />;
  }
  return (
    <View style={styles.container}>
      <AppHeader title="To-do List" />
      <PrimaryButton
        title={'Logout'}
        onPress={() => dispatch(onLogoutPress(props))}
      />
    </View>
  );
};
export default UserTab;
