import { View, Text } from 'react-native';
import { SafeArea } from '../../components/utility/SafeAreaComponent';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../features/account/screens/LoginScreen';
import RegisterScreen from '../../features/account/screens/RegisterScreen';
import AccountScreen from '../../features/account/screens/AccountScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen
        name='Main'
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AccountNavigator;
