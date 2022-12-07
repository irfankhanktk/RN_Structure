// In App.js in a new project
import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {horizontalAnimation} from '../utils';
import Splash from '../screens/splash';
import RootStackParamList from '../types/navigation-types/root-stack';
import Home from '../screens/home';
import AddTask from '../screens/add-task';
import Login from '../screens/login';
import Signup from '../screens/signup';
import MagicLinkSplash from 'screens/magic-link-splash';
import EmailLinkSignIn from 'screens/magic-link';
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
        initialRouteName="Login"
        screenOptions={horizontalAnimation}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="Splash" component={MagicLinkSplash} />
        <Stack.Screen name="Login" component={EmailLinkSignIn} />
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTask" component={AddTask} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1,},
});
