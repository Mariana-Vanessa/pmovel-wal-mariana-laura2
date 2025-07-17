import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

export default function App() {
  const router = useRouter();
//  const [email, setEmail] = useState('');
//  const [senha] = useState('');

//  const handleLogin = () => {
//    Alert.alert('WMtunes', `Email: ${email}\nSenha: ${senha}`);
//  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logoWM.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Entrar como:</Text>

      <View style={styles.buttonRow}>

        <Button title="Usuário" onPress={() => router.navigate('/PrincipalUsuario')}/>

        <View style={styles.buttonSpacer} />
        <Button title="Artista" onPress={() => router.navigate('/PrincipalArtista')}/>

      </View>

      <Text style={styles.label}>Não tem conta?</Text>

      <Button title="Criar uma conta" onPress={() => router.navigate('/RealizarCadastro')}/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#220A34',
  },
  logo: {
    width: 400,
    height: 400,
    alignSelf: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
    color: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#888',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#EFDAFF',
  },
  buttonRow: {
    justifyContent: 'center',
    marginTop: 10,
    gap: 2,
  },
  buttonSpacer: {
    width: 20,
  },
});
