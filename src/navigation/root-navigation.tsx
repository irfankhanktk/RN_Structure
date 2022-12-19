// In App.js in a new project
import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Splash from '../screens/splash';
import RootStackParamList from '../types/navigation-types/root-stack';
import { horizontalAnimation } from '../utils';
import TabNavigator from './tab-navigation';
const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={'#ffffff'}
        barStyle={Platform?.OS === 'ios' ? 'default' : 'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="BottomTab" component={TabNavigator} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
