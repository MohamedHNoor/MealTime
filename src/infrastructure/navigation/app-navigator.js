import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { SafeArea } from '../../components/utility/SafeAreaComponent';
import RestaurantsNavigator from './restaurants-navigator';
import MapScreen from '../../features/map/screens/MapScreen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      display: 'flex',
    },
  };
};

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name='Restaurants'
        component={RestaurantsNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Map'
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
