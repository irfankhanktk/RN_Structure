import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, FlatList} from 'react-native';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import AppHeader from '../../components/atoms/headers/index';
import HomeCard from '../../components/molecules/cards/home-card';
type props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = (props: props) => {
  const {navigation} = props;

  const renderItem = React.useCallback(({item, index}: any) => {
    return <HomeCard title="First task" />;
  }, []);
  return (
    <View style={{...styles.container}}>
      <AppHeader title="To-do List" />
      <FlatList 
      contentContainerStyle={styles.contentContainerStyle}
      data={[0, 1]} renderItem={renderItem} />
    </View>
  );
};
export default Home;
