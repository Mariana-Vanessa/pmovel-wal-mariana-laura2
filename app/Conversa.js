import { useRouter } from 'expo-router';
import {View, Text, Button} from 'react-native';

export default function Conversa() {
    const router = useRouter();
  return (
    <View style={{backgroundColor: 'white'}}>
        <Text>Tela de Conversa</Text>
        <Button title="Voltar" onPress={() => router.navigate('/Chat')}/>
    </View>
        
  );
}