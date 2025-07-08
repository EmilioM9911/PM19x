// Importaciones
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Platform,
  Alert,
  ScrollView,
  SectionList,
} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [loading, setLoading] = useState(true);

  const secciones = [
    { title: 'Tecnología', data: ['Programación', 'IA', 'Ciberseguridad'] },
    { title: 'Arte', data: ['Música', 'Pintura', 'Dibujo'] },
    { title: 'Deportes', data: ['Fútbol', 'Basketball', 'Natación'] },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const showAlert = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}:\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const handleRegistro = () => {
    if (!nombre.trim() || !correo.trim()) {
      showAlert('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (!aceptaTerminos) {
      showAlert('Términos no aceptados', 'Debes aceptar los términos y condiciones.');
      return;
    }

    showAlert('Registro exitoso', `Nombre: ${nombre}\nEmail: ${correo}`);
  };

  if (loading) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashText}>Bienvenido</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('./assets/nieve.jpg')}
      style={styles.background}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Bloque 1: Formulario */}
        <View style={styles.formContainer}>
          <Text style={styles.titulo}>Registro de Usuario</Text>
          <TextInput
            placeholder="Nombre completo"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={setNombre}
          />
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#ccc"
            style={styles.input}
            keyboardType="email-address"
            onChangeText={setCorreo}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.text}>Aceptar términos y condiciones</Text>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={aceptaTerminos ? '#0f0' : '#f4f3f4'}
            />
          </View>
          <TouchableOpacity style={styles.boton} onPress={handleRegistro}>
            <Text style={styles.textoBoton}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        {/* Bloque 2: SectionList */}
        <View style={styles.listContainer}>
          <Text style={styles.titulo}>Intereses</Text>
          <SectionList
            sections={secciones}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Text style={styles.listaItem}>• {item}</Text>}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        </View>

        {/* FlatList (comentada como ejemplo) */}
        {/*
          <FlatList
            data={intereses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={styles.listaItem}>• {item.nombre}</Text>
            )}
          />
        */}
      </ScrollView>
    </ImageBackground>
  );
}

// Estilos
const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
  },
  listContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  titulo: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    color: '#fff',
  },
  boton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 15,
    marginBottom: 5,
  },
  listaItem: {
    color: '#fff',
    marginVertical: 2,
    paddingLeft: 10,
  },
});
