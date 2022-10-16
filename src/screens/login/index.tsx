import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Regular from '../../typography/regular-text';
import styles from './styles';
import { useAppTheme } from './../../hooks/use-theme';
import Bold from '../../typography/bold-text';
import i18n from '../../translation';
import { useTranslation } from 'react-i18next';
type props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = (props: props) => {

  const {navigation} =props;
  const {colors} =useAppTheme();
  const {t}=useTranslation();
  console.log('colors:::',colors);
  React.useEffect(()=>{
   i18n?.changeLanguage('ar');
  },[])
  return (
    <View style={{...styles.container,backgroundColor:colors.background}}>
      <Bold label={t('welcome')}/>
    </View>
  );
};
export default Login;
