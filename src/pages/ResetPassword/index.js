import React from 'react';
import { View, TextInput, Button } from 'react-native';

// import { Container } from './styles';

export default function ResetPassword({ navigation }) {
  return (
    <View>
      <TextInput placeholder="Nome de Usuário" />
      <Button title="Resetar senha por email." />
      <Button title="Voltar" onPress={() => navigation.navigate('SignIn')}/>
    </View>
  );
}
