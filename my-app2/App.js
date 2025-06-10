import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const Texto = () => {
  return (
    <Text>Hola desde React Native</Text>
  )

}

export default function App() {
  return (
    //


    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text>Probando ReactNative</Text>
      <Texto></Texto>
      <Button title="Presioname"></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
