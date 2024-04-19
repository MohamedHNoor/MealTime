import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import {
  RestaurantDetailScreen,
  RestaurantScreen,
} from '../../features/restaurants';

const RestaurantStack = createNativeStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantScreen}
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={RestaurantDetailScreen}
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
