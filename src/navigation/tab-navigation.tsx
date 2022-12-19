import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from 'screens/home-tab';
import AddTask from './../screens/add-task/index';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TabParamList from '../types/navigation-types/bottom-tab';
import SearchTab from './../screens/search-tab/index';
import UserTab from 'screens/user-tab';
const Tab = createBottomTabNavigator();
const BottomTab = createNativeStackNavigator<TabParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';

          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'SearchTab') {
            iconName = 'search';
          } else if (route.name === 'UserTab') {
            iconName = 'user';
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <BottomTab.Screen name="HomeTab" component={Home} />
      <BottomTab.Screen name="SearchTab" component={SearchTab} />
      <BottomTab.Screen name="UserTab" component={UserTab} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
export default TabNavigator;
