//importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Texto = () => {
  const [contenido, setContenido] = useState('Hola Mundo');
  const actualizaTexto = () => setContenido('State Modificado');


  return (
    <View>
      <Text onPress={actualizaTexto}> {contenido} </Text>

    </View>
  );
};

//Main
export default function App() {
  const [textoboton, setTextoboton] = useState('Tócame');
  const actualizaBoton = () => setTextoboton('Boton modificado');
  <Button title={textoboton} onPress={actualizaBoton} />
  return (
    //    
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>

      <Button title={textoboton} onPress={actualizaBoton} />

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