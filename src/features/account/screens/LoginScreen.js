import { View, Text } from 'react-native';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from '../components/account.styles';
const LoginScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer></AccountContainer>
    </AccountBackground>
  );
};
export default LoginScreen;
