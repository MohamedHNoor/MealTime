import { View, Text } from 'react-native';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/SpacerComponent';

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon='email'
          mode='contained'
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size='large'>
          <AuthButton
            icon='email'
            mode='contained'
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
export default AccountScreen;
