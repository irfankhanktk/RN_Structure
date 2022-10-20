import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import Medium from '../../typography/medium-text';
import { createUserWithEmailAndPassword } from '../../services/firebase/index';
import { onSignupPress } from '../../services/firebase/firebase-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = (props: props) => {
  const { navigation } = props;
  const dispatch=useAppDispatch();
  // const state =useAppSelector(s=>s?.user);
  const [values, setValues] = React.useState({
    name:'',
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <AppHeader back title="Sign-up" />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput  label={'Full Name'} onChangeText={(str) => setValues({ ...values, name: str })} value={values.name} />
        <PrimaryInput keyboardType={'email-address'} label={'Email'} onChangeText={(str) => setValues({ ...values, email: str })} value={values.email} />
        <PrimaryInput
          secureTextEntry
          placeholder={'********'}
          label={'Password'}
          onChangeText={(str) => setValues({ ...values, password: str })}
          value={values.password} />
        <PrimaryButton disabled={!values?.email||!values?.password||!values.name} title={'Signup'} onPress={() =>dispatch(onSignupPress(values?.name,values?.email,values?.password))} containerStyle={styles.button} />
        <Medium style={styles.accountText} onPress={props?.navigation?.goBack} label={'Already have an account'}/>
      </KeyboardAvoidScrollview>
    </View>

  );
};
export default Signup;
