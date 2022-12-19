import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'screens/home';
import RootStackParamList from './../types/navigation-types/root-stack';
import AddTask from './../screens/add-task/index';

import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const BottomTab = createNativeStackNavigator<RootStackParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="AddTask" component={AddTask} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
export default TabNavigator;
