import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';
import { STORAGEKEYS } from '../../config/constants';
import { getUserData } from '../../services/firebase/firebase-actions';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Regular from '../../typography/regular-text';
import { UTILS } from '../../utils';
import { useAppDispatch, useAppSelector } from './../../hooks/use-store';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = (props: props) => {
  const {navigation} =props;
  const dispatch =useAppDispatch();
  const store =useAppSelector(s=>s);
  console.log('Config::',Config.BASE_URL);
  
  React.useEffect(() => {

    (async()=>{
      let screen:'Login'|'BottomTab' = 'Login';
      UTILS.getItem(STORAGEKEYS.userId).then((userId:any)=>{
      
        if(userId){
           screen='BottomTab';
           dispatch(getUserData(userId));
        }
        setTimeout(() => {
          navigation?.replace(screen);
        }, 2000);
       })
    })()
  }, []);


  return (
    <View style={{...styles.container}}>
      <Regular style={styles.welcomeText} label={'Welcome to to-do'}/>
    </View>
  );
};
export default Splash;
