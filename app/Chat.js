import { useRouter } from 'expo-router';
import {View, Text, Button,} from 'react-native';

export default function Chat() {
    const router = useRouter();
  return (
    <View style={{backgroundColor: 'black'}}>
        <Text>Tela do Chat</Text>
        <Button title="Contatos" onPress={() => router.navigate('/Contatos')}/>
    </View>
        
  );
}