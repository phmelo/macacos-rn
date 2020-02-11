import React from 'react';
import { TextInput, View, Button } from 'react-native';

// import { Container } from './styles';

export default function SignIn({ navigation }) {
  return (
    <View>
      <TextInput placeholder="Nome de Usuário" />
      <TextInput placeholder="Senha" secureTextEntry />
      <Button title="Logar" />
      <Button 
        title="Cadastrar conta" 
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Esqueci minha senha"
        onPress={() => navigation.navigate('ResetPassword')}
      />
    </View>
  );
}
