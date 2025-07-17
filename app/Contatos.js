import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import  {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Link } from 'expo-router';

export default function Contatos() {
  const router = useRouter();

  return (
    <View>
      <Text> Tela de Contatos</Text>
      <Link style={styles.label} href="/Conversa" >Artista 1 - Vai para tela Conversa</Link>

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
    color: '#ff0000',
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