import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  // Alert ya no es necesario si no se usa para mensajes de error, pero se mantiene si se desea
} from 'react-native';

// Componente principal de la aplicación
const App = () => {
  // Estado para el término de búsqueda de la película
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para los resultados de la búsqueda
  const [movies, setMovies] = useState([]);
  // Estado para el tipo de búsqueda (exacta o aproximada)
  const [searchType, setSearchType] = useState('approximate'); // 'exact' o 'approximate'
  // Estado para el indicador de carga
  const [loading, setLoading] = useState(false);
  // Estado para mensajes de error o no resultados
  const [message, setMessage] = useState('');

  // Clave de la API de TMDB. ¡Esta es tu clave insertada!
  const TMDB_API_KEY = '8f5571e83fbe93df03754dfa3881094d';

  // Función para buscar películas
  const searchMovies = async () => {
    if (!searchTerm.trim()) {
      setMessage('Por favor, ingresa el nombre de una película.');
      setMovies([]);
      return;
    }

    setLoading(true); // Activa el indicador de carga
    setMessage(''); // Limpia mensajes anteriores
    setMovies([]); // Limpia resultados anteriores

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(searchTerm)}&language=es-ES`
      );
      const data = await response.json();

      let filteredMovies = data.results;

      if (searchType === 'exact') {
        // Filtra para una coincidencia exacta de título (insensible a mayúsculas y minúsculas)
        filteredMovies = data.results.filter(movie =>
          movie.title.toLowerCase() === searchTerm.toLowerCase()
        );
      }

      if (filteredMovies.length > 0) {
        setMovies(filteredMovies);
      } else {
        setMessage('No se encontraron películas con ese nombre.');
      }
    } catch (error) {
      console.error('Error al buscar películas:', error);
      setMessage('Ocurrió un error al buscar películas. Inténtalo de nuevo.');
    } finally {
      setLoading(false); // Desactiva el indicador de carga
    }
  };

  // Vista principal de búsqueda y resultados
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Buscador de Películas</Text>

      {/* Controles de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escribe el nombre de la película..."
          placeholderTextColor="#ccc"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        <View style={styles.radioContainer}>
          {/* Opción de búsqueda aproximada */}
          <TouchableOpacity
            style={[styles.radioButton, searchType === 'approximate' && styles.radioButtonSelected]}
            onPress={() => setSearchType('approximate')}
          >
            <Text style={styles.radioText}>Aproximada</Text>
          </TouchableOpacity>
          {/* Opción de búsqueda exacta */}
          <TouchableOpacity
            style={[styles.radioButton, searchType === 'exact' && styles.radioButtonSelected]}
            onPress={() => setSearchType('exact')}
          >
            <Text style={styles.radioText}>Exacta</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={searchMovies}
        >
          <Text style={styles.searchButtonText}>Buscar Película</Text>
        </TouchableOpacity>
      </View>

      {/* Indicador de carga */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#60a5fa" />
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      )}

      {/* Mensajes */}
      {message && (
        <Text style={styles.messageText}>{message}</Text>
      )}

      {/* Resultados de la búsqueda */}
      <View style={styles.movieGrid}>
        {movies.map(movie => (
          // Ya no es TouchableOpacity, es solo View para mostrar más info directamente
          <View key={movie.id} style={styles.movieCard}>
            <Image
              source={{
                uri: movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://placehold.co/500x750/333333/FFFFFF?text=No+Poster',
              }}
              style={styles.moviePoster}
              resizeMode="cover"
            />
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
              {/* Título Original si es diferente */}
              {movie.original_title && movie.original_title !== movie.title && (
                <Text style={styles.movieInfo}>
                  <Text style={styles.movieInfoBold}>Título Original:</Text>
                  <Text>{movie.original_title}</Text>
                </Text>
              )}
              <Text style={styles.movieInfo}>
                <Text style={styles.movieInfoBold}>Año:</Text>
                <Text>{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</Text>
              </Text>
              <Text style={styles.movieInfo}>
                <Text style={styles.movieInfoBold}>Rating:</Text>
                <Text>{movie.vote_average ? `${movie.vote_average.toFixed(1)} / 10` : 'N/A'}</Text>
              </Text>
              {movie.overview && (
                // Ahora muestra la descripción completa sin truncar
                <Text style={styles.movieOverview}>
                  {movie.overview}
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// Estilos de la aplicación usando StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1a202c',
    padding: 16,
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#e2e8f0',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  searchContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(45, 55, 72, 0.7)',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: 24,
  },
  textInput: {
    width: '100%',
    padding: 12,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#4a5568',
    color: '#e2e8f0',
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#4a5568',
    borderWidth: 1,
    borderColor: '#4a5568',
    marginHorizontal: 12,
  },
  radioButtonSelected: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  radioText: {
    color: '#e2e8f0',
    fontSize: 18,
    marginLeft: 8,
  },
  searchButton: {
    width: '100%',
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  loadingText: {
    color: '#93c5fd',
    fontSize: 18,
    marginLeft: 12,
  },
  messageText: {
    color: '#fcd34d',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  movieGrid: {
    width: '100%',
    maxWidth: 960,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  movieCard: {
    backgroundColor: 'rgba(45, 55, 72, 0.7)',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '45%', // Aproximadamente 2 columnas para pantallas pequeñas
    // Eliminado: aspectRatio: 0.6, // Esto limitaba la altura
    marginBottom: 24,
    marginHorizontal: 12,
    paddingBottom: 16, // Añadido padding inferior para espacio
  },
  moviePoster: {
    width: '100%',
    height: 250, // Aumentado ligeramente el alto del póster
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  movieDetails: {
    padding: 16,
    flex: 1,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#93c5fd',
  },
  movieInfo: {
    color: '#cbd5e0',
    marginBottom: 4,
    fontSize: 14,
  },
  movieInfoBold: {
    fontWeight: 'bold',
  },
  movieOverview: { // Ahora muestra la descripción completa
    color: '#a0aec0',
    fontSize: 12,
    marginTop: 8,
    lineHeight: 18, // Espaciado entre líneas para mejor lectura
  },
});

export default App;
