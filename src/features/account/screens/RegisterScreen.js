import { View, Text } from 'react-native';
import {
  AccountBackground,
  AccountCover,
  Title,
} from '../components/account.styles';

const RegisterScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meal Time</Title>
    </AccountBackground>
  );
};
export default RegisterScreen;
