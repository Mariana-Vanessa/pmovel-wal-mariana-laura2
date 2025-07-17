import { useRouter } from 'expo-router';
import {View, Text, Button} from 'react-native';

export default function Contratar() {
    const router = useRouter();
  return (
    <View style={{backgroundColor: 'white'}}>
        <Text>Tela Contratar Artista</Text>
        <Button title="Voltar" onPress={() => router.navigate('/PrincipalUsuario')}/>
    </View>
        
  );
}