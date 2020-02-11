import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
// import Background from '~/components/Background';

// import { Container } from './styles';

export default function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <TextInput placeholder="Nome de Usuário" />
        <TextInput placeholder="Senha" secureTextEntry />
        <TextInput placeholder="Confirme sua senha" secureTextEntry />
        <Button
          title="Cadastrar conta"
          onPress={() => navigation.navigate('SignIn')}
        />
        <Text>Depois de efetuar o cadastro, logue e finalize o cadastro.</Text>
      </View>
    </View>
  );
}
