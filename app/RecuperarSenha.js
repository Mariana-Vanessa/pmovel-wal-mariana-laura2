import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from '../firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';


export default function RecuperarSenha() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Sucesso',
        `Um e-mail de recuperação foi enviado para: ${email}`
      );
      router.back(); // Retorna à tela anterior (login)
    } catch (error) {
      console.error(error.code, error.message);
      Alert.alert('Erro ao enviar e-mail', 'Verifique o e-mail e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logoWM.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.subtitle}>Informe seu e-mail para redefinir sua senha</Text>

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Enviar e-mail de recuperação" onPress={handlePasswordReset} />

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar para login" onPress={() => router.navigate('/index')} />
      </View>
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
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: -40,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#888',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#EFDAFF',
    marginBottom: 20,
  },
});
