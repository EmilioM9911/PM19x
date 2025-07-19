import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileMain({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="person-outline" size={28} color="green" />
                <Text style={styles.title}>Perfil de usuario</Text>
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Detalle')}>
                <Text style={styles.buttonText}>Detalles de usuario</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'green',
    },
    button: {
        backgroundColor: '#28A745',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
