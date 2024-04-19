import { View, Text } from 'react-native';
import { AccountBackground, AccountCover } from '../components/account.styles';

const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
    </AccountBackground>
  );
};
export default AccountScreen;
