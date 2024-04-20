import { useContext, useState } from 'react';
import { View } from 'react-native';
import { Spacer } from '../../../components/spacer/SpacerComponent';
import { Text } from '../../../components/typography/TypographyComponent';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from '../components/account.styles';
import { AuthenticationContext } from '../../../services/athentication/athentication.context';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meal Time</Title>
      <AccountContainer>
        <AuthInput
          label='Email'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size='large'>
          <AuthInput
            label='Password'
            value={password}
            textAlignVertical='password'
            secureTextEntry
            autoCapitalize='none'
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size='large'>
          <AuthInput
            label='Confirm Password'
            value={confirmPassword}
            textAlignVertical='password'
            secureTextEntry
            autoCapitalize='none'
            onChangeText={(cp) => setConfirmPassword(cp)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size='large'>
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size='large'>
          <AuthButton
            icon='lock-open-outline'
            made='container'
            onPress={() => onRegister(email, password, confirmPassword)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size='large'>
        <AuthButton mode='contained' onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
export default RegisterScreen;
