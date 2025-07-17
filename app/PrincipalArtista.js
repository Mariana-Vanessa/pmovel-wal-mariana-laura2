import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

export default function PrincipalArtista(){
  const router = useRouter();


  return (
    <View style={styles.container}>
    

      <Text style={styles.label}>E-mail:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Entrar como:</Text>

      <View style={styles.buttonRow}>

        <Button title="Usuário" onPress={() => router.navigate('/CadastroUsuario')}/>;

        <View style={styles.buttonSpacer} />
        <Button title="Artista" onPress={() => router.navigate('/CadastroArtista')}/>;

      </View>

      <Text style={styles.label}>Não tem conta?</Text>

      <Button title="Criar uma conta" onPress={handleLogin} />
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
