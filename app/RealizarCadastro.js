import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

export default function RealizarCadastro() {
  const [email] = useState('');
  const [senha] = useState('');

  const handleLogin = () => {
    Alert.alert('WMtunes', `Email: ${email}\nSenha: ${senha}`);
  };

  return (
  
    <View style={styles.buttonRow}>
        
        <Button title="Usuario" onPress={() => router.navigate('/CadastroUsuario')}/>

        <View style={styles.buttonSpacer} />
        <Button title="Artista" onPress={() => router.navigate('/CadastroArtista')}/>

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
      width: 200,
      height: 200,
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
  
