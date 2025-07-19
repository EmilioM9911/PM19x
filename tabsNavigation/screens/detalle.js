import { View, Text, StyleSheet } from 'react-native';

export default function Detalle() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles Usuario</Text>
            <Text style={styles.subtitle}>Usando Navegacion Stack</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: 'blue',
        marginTop: 5,
    },
});
