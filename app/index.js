import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";
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
  const [email, setEmail] = useState('mvs38@aluno.ifal.edu.br');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log(user);
      router.navigate('/CadastroUsuario')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
    }    
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logoWM.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput style={styles.input} value={email} onChangeText={a => setEmail(a)}/>

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} value={senha} onChangeText={a => setSenha(a)} />

      <Button title="Esqueceu a sua senha?" onPress={() => router.navigate('/RecuperarSenha')}/>

      <Text style={styles.label}>Entrar como:</Text>

      <View style={styles.buttonRow}>

        <Button title="Usuário" onPress={() => router.navigate('/PrincipalUsuario')}/>

        <View style={styles.buttonSpacer} />
        <Button title="Artista" onPress={handleLogin}/>

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
