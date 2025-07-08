
import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptado, setAceptado] = useState(false);

  const handleRegistro = () => {
    if (!nombre || !correo) {
      Alert.alert('Error', 'Por favor llena todos los campos');
    } else if (!aceptado) {
      Alert.alert('Importante', 'Debes aceptar los términos y condiciones');
    } else {
      Alert.alert('Éxito', 'Registro exitoso');
    }
  };

  return (
    <ImageBackground source={require('./assets/nieve.jpg')} style={styles.fondo}>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Registro de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
        />
        <View style={styles.switchContainer}>
          <Text>Aceptar términos y condiciones</Text>
          <Switch value={aceptado} onValueChange={setAceptado} />
        </View>
        <Button title="Registrarse" onPress={handleRegistro} color="#007bff" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formulario: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    width: '100%',
  }
});
