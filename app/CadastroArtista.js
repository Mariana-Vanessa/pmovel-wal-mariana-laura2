import React, { useState } from 'react';
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';


export default function CadastroArtista() {
  const router = useRouter();

  const [newEmail, newSetEmail] = useState('');
  const [newSenha, newSetSenha] = useState('');
  const [telefone] = useState('');
  const [cpf] = useState('');

  const createUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, newEmail, newSenha);
      const user = userCredential.user;
      console.log(user);
      router.navigate('/PrincipalArtista')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
    }    
  }
;
  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>E-mail:</Text>
      <TextInput style={styles.input} value={newEmail}onChangeText={a => newSetEmail(a)} />

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} value={newSenha}onChangeText={a => newSetSenha(a)}/>

      <Text style={styles.label}>Telefone:</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Cpf:</Text>
      <TextInput style={styles.input} />

      <View style={styles.buttonRow}>
        
        <Button title="Próximo" onPress={createUser}/>
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
