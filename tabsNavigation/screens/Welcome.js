import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a la App</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('MainTabs')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 30,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
