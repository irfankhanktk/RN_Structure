import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PlusButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import { PrimaryInput } from '../../components/atoms/inputs';
import HomeCard from '../../components/molecules/cards/home-card';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'AddTask'>;

const AddTask = (props: props) => {
  const { navigation } = props;
  const [values,setValues]=React.useState({
    email:'',
    password:'',
  });

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <AppHeader title="Add Tasks" />
      <PrimaryInput label={'Email'} onChangeText={(str)=>setValues({...values,email:str})} value={values.email}/>
    </KeyboardAwareScrollView>
  );
};
export default AddTask;
